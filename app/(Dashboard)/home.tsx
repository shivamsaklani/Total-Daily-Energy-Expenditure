import { userAtom } from "@/GlobalState/userDetails";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView} from "react-native";
import { useRecoilValue } from "recoil";

export default function Home(){
    const user= useRecoilValue(userAtom);
    return(
      
        <SafeAreaView className="flex-1 bg-red-300">
               <FontAwesome name="home" size={30}/>
        </SafeAreaView>
      
    )
}
