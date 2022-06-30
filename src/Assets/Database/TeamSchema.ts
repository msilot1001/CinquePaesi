import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { UserClass } from './UserSchema';
import { TerritoryClass } from './TerritorySchema';

export enum Country {
  NONE = 0,
  GOLD = 1,
  GEM = 2,
  IRON = 3,
  TOUR = 4,
  FARM = 5,
  MANU = 6,
}

export class TeamClass {
  @prop({ required: true })
  name!: string;

  @prop({ ref: () => UserClass })
  leader!: Ref<UserClass>;

  @prop({ ref: () => UserClass, default: [] })
  people!: Ref<UserClass>[];

  @prop({ required: true, ref: () => TerritoryClass, default: [] })
  territory!: Ref<TerritoryClass>[];

  @prop({ required: true, default: 0 })
  money!: number;

  // 군사수
  @prop({ required: true, default: 0 })
  troops!: number;

  @prop()
  rule?: string;

  // JSON 으로 저장
  @prop({ required: true, default: '[]' })
  items?: string;
}

export const TeamModel = getModelForClass(TeamClass);
