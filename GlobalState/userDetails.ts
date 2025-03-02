import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    gender: "",
    age: 0,
    workout: "",
    weight: 0,
    height: 0,
    plan:{
      currentkacl:0,
      goalkacl:0,
    },
  },
});
