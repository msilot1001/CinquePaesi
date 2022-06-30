import { ItemType } from '../Enums/Enums';

interface IItem {
  id: number;
  name: string;
  description: string;
  damage: number;
  type: ItemType;
}

export default IItem;
