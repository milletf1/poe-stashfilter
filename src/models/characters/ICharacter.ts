import { ClassIds } from './ClassIds';
import { ClassTypes } from './ClassTypes';

export interface ICharacter {
  ascendancyClass: number; // TODO: replace with enum
  class: ClassTypes;
  classId: ClassIds;
  experience: number;
  level: number;
  league: string;
  name: string;
  lastActive?: boolean;
}
