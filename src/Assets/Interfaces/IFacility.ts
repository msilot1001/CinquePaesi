import { TeamClass } from '../Database/TeamSchema';

class Facility {
  id: number;
  name: string;
  guild: TeamClass;
  DailyEvent: () => Promise<void>;
  PassiveEffect: () => Promise<void>;
  ActivatedEvent: () => Promise<void>;

  constructor(
    id: number,
    name: string,
    guild: TeamClass,
    DailyEvent: () => Promise<void>,
    PassiveEffect: () => Promise<void>,
    ActivatedEvent: () => Promise<void>,
  ) {
    this.id = id;
    this.name = name;
    this.guild = guild;
    this.DailyEvent = DailyEvent;
    this.PassiveEffect = PassiveEffect;
    this.ActivatedEvent = ActivatedEvent;
  }
}

export default Facility;
