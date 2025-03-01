import { SafeAreaView, Text } from "react-native";

export default function Dashboard({
    children
}:{
    children:React.ReactNode
}){
    return(
        <SafeAreaView className="flex-1 justify-center">
            {children}
            
        </SafeAreaView>
    )
}