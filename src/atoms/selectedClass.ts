import { atom } from "recoil";
import { Atoms } from "./enums";
export const selectedClass = atom({
  key: Atoms.ClassId, // unique ID (with respect to other atoms/selectors)
  default: {} as any
});