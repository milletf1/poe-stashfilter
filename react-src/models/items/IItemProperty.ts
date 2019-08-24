export interface IItemProperty {
  /** Name */
  name: string;
  /** Values */
  values: Array<[string, number]>;
  /** Display mode */
  displayMode: number;
  /** Type */
  type: number;
}

export interface IAdditionalItemProperty extends IItemProperty {
  /** Progress */
  progress: number;
}
