import { ICharacterItems } from '../../../models/characters/ICharacterItems';
import { IError } from './IError';

export interface IGetCharacterItemsResponse extends IError {
  characterItems: ICharacterItems;
}
