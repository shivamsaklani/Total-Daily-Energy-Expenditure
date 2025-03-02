import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "./styles";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  padding?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg";
  textColor?: "white" | "black" | "blue500";
}

// Define mappings to avoid TypeScript errors


const roundedMap = {
  sm: buttonStyles.roundedSm,
  md: buttonStyles.roundedMd,
  lg: buttonStyles.roundedLg,
};
const paddingMap ={
  sm: buttonStyles.sm,
  md:buttonStyles.md,
  lg:buttonStyles.lg
}

const textColorMap = {
  white: buttonStyles.textWhite,
  black: buttonStyles.textBlack,
  blue500: buttonStyles.textBlue500,
};

export default function Button({
  title,
  onClick,
  variant = "primary",
  padding = "md",
  rounded = "md",
  textColor = "white",
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        buttonStyles.baseButton,
        buttonStyles[variant],
        roundedMap[rounded],
        paddingMap[padding]
      ]}
    >
      <Text style={[buttonStyles.text, textColorMap[textColor]]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
