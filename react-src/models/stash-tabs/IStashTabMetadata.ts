export interface IStashTabMetadata {
  /** Colour of tab  */
  colour?: IStashTabColour;
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
  /** Type of stash tab */
  type: string;
  srcC: string;
  srcL: string;
  srcR: string;
}

export interface IStashTabColour {
  r: number;
  g: number;
  b: number;
}
