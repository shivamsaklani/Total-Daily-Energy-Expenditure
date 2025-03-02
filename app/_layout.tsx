import { Slot } from "expo-router";
import { RecoilRoot } from "recoil";

export default function applayout(){

    return(
        <RecoilRoot>
                 <Slot/>
        </RecoilRoot>
       
    )
}