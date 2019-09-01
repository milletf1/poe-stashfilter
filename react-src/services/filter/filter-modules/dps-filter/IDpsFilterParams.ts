export const enum DpsType {
  ANY,
  PHYSICAL,
  ELEMENTAL,
  CHAOS,
}

export interface IDpsFilterParams {
  type: DpsType;
  min?: number;
  max?: number;
}
