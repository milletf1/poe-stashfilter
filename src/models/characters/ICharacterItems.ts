import { IBaseItem } from '../items/IBaseItem';
import { ICharacter } from './ICharacter';

export interface ICharacterItems {
  character: ICharacter;
  items: IBaseItem[];
}
