import { userAtom } from "@/GlobalState/userDetails";
import { SafeAreaView, Text } from "react-native";
import { RecoilRoot, useRecoilValue } from "recoil";

export default function home(){
    const user= useRecoilValue(userAtom);
    return(
        <SafeAreaView className="flex-1 bg-red-300">
                <Text>name:{user.age}</Text>
                <Text>name:{user.gender}</Text>
                <Text>name:{user.weight}</Text>
                <Text>name:{user.workout}</Text>
                <Text>name:{user.height}</Text>
        </SafeAreaView>
      
    )
}