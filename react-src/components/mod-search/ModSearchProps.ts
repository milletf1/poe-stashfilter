import { ISearchDropdownLabel } from './../search-dropdown/ISearchDropdownLabel';

export default interface IModSearchProps {
  mods: ISearchDropdownLabel[];
  modsMin: string[];
  modsMax: string[];
  updateMods: (index: number, mod: ISearchDropdownLabel) => void;
  updateModsMin: (index: number, value: string) => void;
  updateModsMax: (index: number, value: string) => void;
  removeItemMod: (index: number) => void;
}
