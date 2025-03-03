import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Screen from "@/Component/Screen";
import Options from "@/Component/Options";
import { useRecoilState } from "recoil";
import { userAtom } from "@/GlobalState/userDetails";
import Selector from "@/Component/Selector";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import FindTDEE from "./TDEE_logic/TDEE";
type RootStackParamList = {
  screen1: { step: number };
  screen2: { step: number };
  screen3: { step: number };
  screen4: { step: number };
  screen5: { step: number };
  screen6: { step: number };
  screen7: { step: number };
};

type Props = NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;

const OnboardScreen: React.FC<Props> = ({ route, navigation }) => {
  const { step } = route.params;
  const calorieData= FindTDEE();
  // User state to store responses
  const [user, setUser] = useRecoilState(userAtom);

  // Function to update user entered values
  const handleSelection = (key: keyof typeof user, value: any, currentValue?: number) => {
    setUser((prev) => {
      if (key === "plan") {
        return {
          ...prev,
          plan: {
            ...prev.plan,
            goalkacl: value, 
            currentkacl: currentValue ?? prev.plan.currentkacl, 
          },
        };
      }
      return { ...prev, [key]: value };
    });
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
    const router=useRouter();
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
  values={Array.from({ length: 99 - 15 + 1 }, (_, i) => i + 15)} defaultValue={25} subheading="Years"
  onSelect={(value) => handleSelection("age", value)} 
/> 
</Screen>
        );

      
      case 3:
        return(
          <Screen onClick={clickNext} title="Daily Work out">
            <Options title="Light exercise" subtitle="1–3 days per week" onClick={()=>handleSelection("workout","Intensive")} isSelected={user.workout ==="Intensive"}/>
            <Options title="Moderate exercise" subtitle="3–5 days per week" onClick={()=>handleSelection("workout","Moderate")} isSelected={user.workout ==="Moderate"}/>
            <Options title="Hard exercise" subtitle="6–7 days per week" onClick={()=>handleSelection("workout","Less")} isSelected={user.workout ==="Less"}/>
            <Options title="No Excercise" onClick={()=>handleSelection("workout","NoExcercise")} isSelected={user.workout ==="NoExcercise"}/>



          </Screen>
        )
        case 4:
          return(
            <Screen onClick={clickNext} title="Your Weight in kgs">
               <Selector values={Array.from({ length: 200 }, (_, i) => i + 1)} defaultValue={50} subheading="Kg" onSelect={(value)=>handleSelection("weight",value)}/>
            </Screen>
          )
        case 5:
          return(
            <Screen onClick={clickNext} title="Your Height in cm">
              <Selector values={Array.from({ length: 300}, (_, i) => i + 1)} subheading="Cm" defaultValue={180} onSelect={(value)=>handleSelection("height",value)}/>
            </Screen>
          );
          case 6:
          return (
            <Screen onClick={clickNext} btntitle="Select Goal"  title="Total Daily Engergy Expenditure">
              <Text style={styles.summaryText}>Your Total Daily Engergy Expenditure(Approx)</Text>
              <Text style={styles.subtitle}>{calorieData.TDEE}</Text>
              </Screen>
          );
        
        case 7:
          return(
            <Screen 
    btntitle="Start Journey" 
    onClick={() => router.push("/(Dashboard)/home")} 
    title="Select Your Goal"
>
    {calorieData && (
        <>
            <Options 
                title="Gain Weight" 
                subtitle={`( ${calorieData.moderateGain} kcal/day)`} 
                onClick={() => handleSelection("plan", calorieData.moderateGain)} 
                isSelected={user.plan.goalkacl === calorieData.moderateGain}
            />
            <Options 
                title="Loss Weight" 
                subtitle={`( ${calorieData.moderateFatLoss} kcal/day)`}   
                onClick={() => handleSelection("plan", calorieData.moderateFatLoss)} 
                isSelected={user.plan.goalkacl === calorieData.moderateFatLoss}
            />
            <Options 
                title="Maintain Weight" 
                subtitle={`( ${calorieData.maintain} kcal/day)`}  
                onClick={() => handleSelection("plan",  calorieData.maintain)} 
                isSelected={user.plan.goalkacl === calorieData.maintain}
            />
        </>
    )}
</Screen>

          )
        


      default:
        return <Text style={styles.summaryText}>Invalid Step</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {step > 1 && (
        <TouchableOpacity style={styles.buttonContainer} onPress={clickBack}>
          <Icon name="arrow-left" size={20} color="#0e064b" />
        </TouchableOpacity>
      )}
      {renderScreen()}
    </View>
  );
  
};

const styles = StyleSheet.create({
  summaryText: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  container: { 
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "flex-start",  
    paddingHorizontal: 10, 
  },
  buttonContainer: { 
    flexDirection: "row",
    position:"absolute",
    backgroundColor: "#9c9aad",
    borderRadius: 25, 
    height: 40, 
    width: 40,
    top:10,
    left:10,
    alignItems: "center", 
    justifyContent: "center", 
    elevation:10,
    zIndex:10,
  },
  subtitle:{
    fontSize: 50,
    textAlign:"center",
    fontWeight: "800",
  }
});

export default OnboardScreen; 