import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    gender: "",
    age: null,
    workout: "",
    weight: "",
    height: "",
  },
});
