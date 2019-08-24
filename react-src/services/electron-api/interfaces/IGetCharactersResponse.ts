
import { ICharacter } from '../../../models/characters/ICharacter';
import { IError } from './IError';

export interface IGetCharactersResponse extends IError {
  characters: ICharacter[];
}
