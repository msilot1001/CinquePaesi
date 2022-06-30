import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { TeamClass } from './TeamSchema';

enum Position {
  EMPEROR = 1,
  KING = 2,
  PM = 3,
  COMMANDER = 4,
  CITIZEN = 5,
}

export class UserClass {
  @prop({ required: true })
  id!: string;

  @prop({ required: true })
  nametag!: string;

  @prop({ required: true, default: 0 })
  money!: number;

  @prop({ required: true, default: null })
  team!: Ref<TeamClass>;

  @prop({ required: true, enum: Position, default: Position.CITIZEN })
  position!: Position;
}

export const UserModel = getModelForClass(UserClass);
