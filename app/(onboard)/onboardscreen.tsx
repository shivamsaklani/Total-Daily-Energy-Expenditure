import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "@/Component/Screen";
import Options from "@/Component/Options";
import { useRecoilState } from "recoil";
import { userAtom } from "@/GlobalState/userDetails";
import { Screenstyles } from "@/Component/styles";
import Selector from "@/Component/Selector";
import Button from "@/Component/Button";
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
          <Screen onClick={clickNext} title="Your Age">
            <Selector 
  values={Array.from({ length: 99 - 15 + 1 }, (_, i) => i + 15)} subheading="Years"
  onSelect={(value) => handleSelection("age", value)} 
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
            <Screen onClick={clickNext} title="Your Weight in kgs">
               <Selector values={Array.from({ length: 200 }, (_, i) => i + 1)} subheading="Kg" onSelect={(value)=>handleSelection("weight",value)}/>
            </Screen>
          )
        case 5:
          return(
            <Screen onClick={clickNext} title="Your Height in cm">
              <Selector values={Array.from({ length: 300}, (_, i) => i + 1)} subheading="Cm" onSelect={(value)=>handleSelection("height",value)}/>
            </Screen>
          )
        case 6:
          return (
            <Screen btntitle="Get Started" title="Summary">
              <Text style={styles.summaryText}>Gender: {user.gender}</Text>
              <Text style={styles.summaryText}>Age: {user.age}</Text>
              <Text style={styles.summaryText}>Height {user.height}</Text>
              <Text style={styles.summaryText}>Weight: {user.weight}</Text>
              <Text style={styles.summaryText}>Excercise:{user.workout}</Text>
                  </Screen>
          );
        


      default:
        return <Text style={styles.summaryText}>Invalid Step</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {step > 1 && (
          <TouchableOpacity style={Screenstyles.backButton} onPress={clickBack}>
                  <Button title="Back" />
                </TouchableOpacity>
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