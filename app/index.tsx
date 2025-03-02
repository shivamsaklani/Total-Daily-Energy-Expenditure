import Button from '@/Component/Button';
import '../global.css';
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";

export default function RootLayout() {
  const bg = require("../assets/images/bg.webp");
  const router = useRouter(); 

  return (
    <SafeAreaView className="flex-1 relative bg-secondary">
     
      <Image
        source={bg}
        style={{ width: "100%", height: "100%" }}
        className="absolute inset-0"
        contentFit="cover"
        transition={1000}
      />

     
      <View className="absolute bottom-8 w-full items-center">
       <Button title='Get Started' variant='primary' padding='lg' onClick={()=>router.push("/(onboard)/onboardscreen")}/>
      </View>
    </SafeAreaView>
  );
}
