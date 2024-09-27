import { atom } from "recoil";
import { Atoms } from "./enums";

export const profileAtom = atom({
  key: Atoms.Profile, // unique ID (with respect to other atoms/selectors)
  default: {
    name: 'John Doe',
    email: ''
  }, // default value (aka initial value)
});