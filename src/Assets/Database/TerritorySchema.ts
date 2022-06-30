import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { TeamClass, Country } from './TeamSchema';
import Facility from '../Interfaces/IFacility';

enum Climate {
  POLAR = 1,
  SUBARCTIC = 2,
  TEMPERATE = 3,
  TROPICAL = 4,
  DRY = 5,
  LOFTY = 6,
}

enum Type {
  PLAIN = 1,
  DESERT = 2,
  RIVER = 3,
  FOREST = 4,
  FERTILELAND = 5,
  BEACH = 6,
  OCEAN = 7,
}

class ClimateClass {
  public readonly name: string;
  public owner: TeamClass;
  public readonly origin: Country;
  public readonly climate: Climate;
  public readonly landtype: Type;

  constructor(
    name: string,
    owner: TeamClass,
    origin: Country,
    climate: Climate,
    landtype: Type,
  ) {
    this.name = name;
    this.owner = owner;
    this.origin = origin;
    this.climate = climate;
    this.landtype = landtype;
  }
}

export class TerritoryClass {
  @prop({ required: true, unique: true })
  uuid!: string;

  @prop({ required: true })
  channelid!: string;

  @prop({ required: true })
  name!: string;

  @prop({ required: true, enum: Country })
  continent!: Country;

  @prop({ required: true, ref: () => ClimateClass })
  climate!: Ref<ClimateClass>;

  @prop({ required: true })
  length!: number;

  @prop({ required: true })
  population!: number;

  // 시설
  @prop({ required: true, ref: () => Facility })
  facility!: Ref<Facility>;
}

export const TerritoryModel = getModelForClass(TerritoryClass);
