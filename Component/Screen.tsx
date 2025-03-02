import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
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
      {/* Back Button */}
      <TouchableOpacity style={Screenstyles.backButton} onPress={() => console.log("Back pressed")}>
        <Text>Back</Text>
      </TouchableOpacity>

      {/* Title Section */}
      <View style={Screenstyles.titleSection}>
        <Text style={Screenstyles.title}>{title}</Text>
        <Text style={Screenstyles.subtitle}>
          This will be used to calibrate your calories.
        </Text>
      </View>

      {/* Content */}
      <View style={Screenstyles.content}>{children}</View>

      {/* Next Button */}
      <View style={Screenstyles.buttonContainer}>
        <Button title={btntitle || "Next"} variant="primary" rounded="lg" onClick={onClick} />
      </View>
    </View>
  );
}


