import { Text, TouchableOpacity } from "react-native";
import { optionStyles } from "./styles"; // Import styles

interface OptionsProps {
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function Options({ title, onClick, isSelected }: OptionsProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        optionStyles.option,
        isSelected ? optionStyles.selectedOption : optionStyles.unselectedOption,
      ]}
    >
      <Text style={[optionStyles.text, isSelected ? optionStyles.selectedText : optionStyles.unselectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
