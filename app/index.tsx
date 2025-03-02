import Button from '@/Component/Button';
import '../global.css';
import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { SafeAreaView, Text, View } from "react-native";
import "react-native-gesture-handler";

export default function RootLayout() {
  const bg = require("../assets/images/bg.webp");
  const router = useRouter(); 

  return (
    <SafeAreaView className="flex-1 relative bg-secondary">
      {/* Full-screen background image */}
      <Image
        source={bg}
        style={{ width: "100%", height: "100%" }}
        className="absolute inset-0"
        contentFit="cover"
        transition={1000}
      />

      {/* White Bottom Container */}
      <View className="absolute bottom-0 w-full bg-white rounded-lg p-6 h-1/3 items-center justify-center">
        <Text className="text-xl font-semibold text-gray-800 mb-4">Welcome to Our App</Text>
        <Text className="text-gray-600 text-center mb-6">
          Get started with your personalized journey.
        </Text>
        <Button 
          title="Get Started" 
          variant="primary" 
          padding="lg" 
          onClick={() => router.push("/(onboard)/onboardscreen")}
        />
      </View>
    </SafeAreaView>
  );
}
