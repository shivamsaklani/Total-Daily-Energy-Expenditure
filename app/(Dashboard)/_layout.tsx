import { Slot } from "expo-router";
import { SafeAreaView, Text } from "react-native";
import { RecoilRoot } from "recoil";

export default function Dashboard(){
    return(
        <SafeAreaView className="flex-1 justify-center">
        <Slot/>

        </SafeAreaView>
        
    )
}