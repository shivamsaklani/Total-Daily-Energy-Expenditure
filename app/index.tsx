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
        <TouchableOpacity
          className="bg-accent px-6 py-4 rounded-full shadow shadow-20"
          onPress={() => router.push("/onboardscreen")} 
        >
          <Text className="text-white text-lg font-semibold text-center">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
