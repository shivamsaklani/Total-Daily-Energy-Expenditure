import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  screen1: { step: number };
  screen2: { step: number };
  screen3: { step: number };
};

type Props = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

const OnboardScreen: React.FC<Props> = ({ route, navigation }) => {
  const { step } = route.params; 

  return (
    <View style={styles.container}>

        {step === 1
          ? "Introduction to our app."
          : step === 2
          ? "Explore key features."
          : "Get started with setup!"}
   

      {step < 3 ? (
        <Button
          title="Next"
          onPress={() =>
            navigation.navigate(`screen${step + 1}` as keyof RootStackParamList, { step: step + 1 })
          }
        />
      ) : (
        <Button title="Finish" onPress={() => alert("Onboarding Complete!")} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  });

export default OnboardScreen;
