import { userAtom } from "@/GlobalState/userDetails"
import { useRecoilValue } from "recoil"

export default function FindTDEE():number |null{
    const user = useRecoilValue(userAtom);
    // Coefficients based on gender
    const ageFactor: number = user.gender === "Male" ? 6.755 : 4.6756;
    const weightFactor: number = user.gender === "Male" ? 13.7516 : 9.5634;
    const heightFactor: number = user.gender === "Male" ? 5.0033 : 1.8496;
    const baseBMR: number = user.gender === "Male" ? 66.473 : 655.0955;
    const activityfactor:Record<string,number> = {
        "NoExcercise":1.2,
        "Less":1.375,
        "Moderate":1.55,
        "Intensive":1.725,

    };
   
    
    const BMR:number = baseBMR + (weightFactor * user.weight) + (heightFactor * user.height) - (ageFactor * user.age);
    const TDEE:number = BMR*activityfactor[user.workout];
    return TDEE;
    

}

// All the Logic for Calculating TDEE is handled HermesInternal

// To find Users TDEE we need calculate their BMR(BASAL Metabolic Rate)

// In this Approach I haved used Harris Benedict Equation for Calculating BMR 

// once We get BMR then TDEE can be Find as :

// TDEE = BMR * Activity Factor 

// Lightly Active	Light exercise 1–3 days per week	1.375
// Moderately Active	Moderate exercise 3–5 days per week	1.55
// Very Active	Hard exercise 6–7 days per week	1.725