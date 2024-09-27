import { atom } from "recoil";
import { Atoms } from "./enums";
export const questionsAtom = atom({
  key: Atoms.Questions, // unique ID (with respect to other atoms/selectors)
  default: [] as any
});