import { atom } from "recoil";
import { Atoms } from "./enums";

export const profileAtom = atom({
  key: Atoms.Profile, // unique ID (with respect to other atoms/selectors)
  default: {} as any, // default value (aka initial value)
});