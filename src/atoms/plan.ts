import { atom } from "recoil";
import { Atoms } from "./enums";

export const planAtom = atom({
  key: "Plan", // unique ID (with respect to other atoms/selectors)
  default: {} as any, // default value (aka initial value)
});