import { ICharacterItems } from './characters/ICharacterItems';
import { IStashTab } from './stash-tabs/IStashTab';

export interface ILeague {
  name: string;
  characters: ICharacterItems[];
  stashTabs: IStashTab[];
}
