import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./onboardscreen";
import { RecoilRoot } from "recoil";


type RootStackParamList = {
  screen1: { step: number };
  screen2: { step: number };
  screen3: { step: number };
  screen4: { step: number };
  screen5: { step: number };
  screen6: { step: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LayoutOnboard: React.FC = () => {
  return (
     <RecoilRoot>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screen1" component={OnboardScreen} initialParams={{ step: 1 }} />
        <Stack.Screen name="screen2" component={OnboardScreen} initialParams={{ step: 2 }} />
        <Stack.Screen name="screen3" component={OnboardScreen} initialParams={{ step: 3 }} />
        <Stack.Screen name="screen4" component={OnboardScreen} initialParams={{ step: 4 }} />
        <Stack.Screen name="screen5" component={OnboardScreen} initialParams={{ step: 5 }} />
        <Stack.Screen name="screen6" component={OnboardScreen} initialParams={{ step: 6 }} />
      </Stack.Navigator>
      </RecoilRoot>
  );
};

export default LayoutOnboard;
