export interface IStashTabMetadata {
  /** Colour of tab TODO: confirm for normal stash tabs */
  colour?: any;
  /** Id */
  id: string;
  /** Index */
  i: number;
  /** Label */
  n: string;
  /** Indicates if the  stash tab is public */
  hidden: boolean;
  /** Selected */
  selected: boolean;
  /** Type of stash tab TODO: confirm for normal stash tabs */
  type: string;
  srcC: string;
  srcL: string;
  srcR: string;
}
