import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./onboardscreen";


type RootStackParamList = {
  screen1: { step: number };
  screen2: { step: number };
  screen3: { step: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LayoutOnboard: React.FC = () => {
  return (
   
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screen1" component={OnboardScreen} initialParams={{ step: 1 }} />
        <Stack.Screen name="screen2" component={OnboardScreen} initialParams={{ step: 2 }} />
        <Stack.Screen name="screen3" component={OnboardScreen} initialParams={{ step: 3 }} />
      </Stack.Navigator>
  );
};

export default LayoutOnboard;
