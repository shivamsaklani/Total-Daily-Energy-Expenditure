import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "@/Component/Button";
import Screen from "@/Component/Screen";
import Options from "@/Component/Options";
import { useRecoilState } from "recoil";
import { userAtom } from "@/GlobalState/userDetails";

type RootStackParamList = {
  screen1: { step: number };
  screen2: { step: number };
  screen3: { step: number };
  screen4: { step: number };
  screen5: { step: number };
  screen6: { step: number };
};

type Props = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

const OnboardScreen: React.FC<Props> = ({ route, navigation }) => {
  const { step } = route.params;

  // User state to store responses
  const [user, setUser] = useRecoilState(userAtom);

  // Function to update user responses
  const handleSelection = (key: keyof typeof user, value: string | number) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const clickNext = () => {
    navigation.navigate(`screen${step + 1}` as keyof RootStackParamList, { step: step + 1 });
  };

  const clickBack = () => {
    if (step > 1) {
      navigation.navigate(`screen${step - 1}` as keyof RootStackParamList, { step: step - 1 });
    }
  };

  const renderScreen = () => {
    switch (step) {
      case 1:
        return (
          <Screen onClick={clickNext} title="What is your Gender?">
            <Options
              title="Male"
              onClick={() => handleSelection("gender", "Male")}
              isSelected={user.gender === "Male"}
            />
            <Options
              title="Female"
              onClick={() => handleSelection("gender", "Female")}
              isSelected={user.gender === "Female"}
            />
          </Screen>
        );

      case 2:
        return (
          <Screen onClick={clickNext} title="What is your Age?">
            <Options
              title="18-25"
              onClick={() => handleSelection("age", 20)}
              isSelected={user.age === 20}
            />
            <Options
              title="26-35"
              onClick={() => handleSelection("age", 30)}
              isSelected={user.age === 30}
            />
          </Screen>
        );

      
      case 3:
        return(
          <Screen onClick={clickNext} title="Daily Work out">
            <Options title="Intensive(4-5 hours)" onClick={()=>handleSelection("workout","Intensive")} isSelected={user.workout ==="Intensive"}/>
            <Options title="Moderate(1-2 hours)" onClick={()=>handleSelection("workout","Moderate")} isSelected={user.workout ==="Moderate"}/>
            <Options title="Less than 30 minutes" onClick={()=>handleSelection("workout","Less")} isSelected={user.workout ==="Less"}/>
            <Options title="No Excercise" onClick={()=>handleSelection("workout","NoExcercise")} isSelected={user.workout ==="NoExcercise"}/>



          </Screen>
        )
        case 4:
          return(
            <Screen onClick={clickNext} title="Enter your Weight">
              <TextInput placeholder="Enter your Weight" />
            </Screen>
          )
        case 5:
          return(
            <Screen onClick={clickNext} title="Enter your Height">
              <TextInput placeholder="Enter your Height"/>
            </Screen>
          )
        case 6:
          return (
            <Screen btntitle="Get Started" title="Summary">
              <Text style={styles.summaryText}>Gender: {user.gender}</Text>
              <Text style={styles.summaryText}>Age: {user.age}</Text>
                  </Screen>
          );
        


      default:
        return <Text style={styles.summaryText}>Invalid Step</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {step > 1 && (
          <Button title="Back" variant="secondary" padding="md" rounded="md" onClick={clickBack} />
        )}
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  summaryText: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  buttonContainer: { flexDirection: "row", marginTop: 20, gap: 10 },
});

export default OnboardScreen; 