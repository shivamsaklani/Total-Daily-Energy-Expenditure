import { Text,  View, StyleSheet } from "react-native";
import Button from "./Button";
import { Screenstyles } from "./styles";
export default function Screen({
  btntitle,
  title,
  children,
  onClick,
}: { 
  btntitle?: string;
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <View style={Screenstyles.container}>
      <View style={Screenstyles.titleSection}>
        <Text style={Screenstyles.title}>{title}</Text>
        <Text style={Screenstyles.subtitle}>
          This will be used to calibrate your calories.
        </Text>
      </View>

     
      <View style={[Screenstyles.container,Screenstyles.gap]}>{children}</View>

  
      <View>
        <Button title={btntitle || "Next"} variant="primary" rounded="lg" onClick={onClick} />
      </View>
    </View>
  );
}


