import { StyleSheet } from "react-native";

export const optionStyles = StyleSheet.create({
  option: {
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // For Android shadow effect
  },
  selectedOption: {
    backgroundColor: "#1D4ED8", // Primary color
  },
  unselectedOption: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D5DB", // Gray-300
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  selectedText: {
    color: "white",
  },
  unselectedText: {
    color: "#374151", // Gray-700
  },
});

// Screen Styles
export const Screenstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f3f4f6",
      paddingHorizontal: 24,
      paddingVertical: 32,
    },
    backButton: {
      position: "absolute",
      top: 24,
      left: 16,
      padding: 8,
      backgroundColor: "white",
      borderRadius: 50,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    titleSection: {
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "800",
      color: "#1f2937",
    },
    subtitle: {
      fontSize: 16,
      color: "#6b7280",
      marginTop: 4,
    },
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 24,
    },
    buttonContainer: {
      width: "100%",
      position: "absolute",
      bottom: 32,
    },
  });
// Button Styles
export const buttonStyles = StyleSheet.create({
    baseButton: {
      alignItems: "center",
      justifyContent: "center",
    },
    primary: {
      backgroundColor: "#0e064b", 
    },
    secondary: {
      backgroundColor: "#E5E7EB", 
    },
    outline: {
      borderWidth: 1,
      borderColor: "#0e064b", 
      backgroundColor: "transparent",
    },
    sm: {
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    md: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    lg: {
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    roundedSm: {
      borderRadius: 4,
    },
    roundedMd: {
      borderRadius: 8,
    },
    roundedLg: {
      borderRadius: 12,
    },
    textWhite: {
      color: "white",
    },
    textBlack: {
      color: "black",
    },
    textBlue500: {
      color: "#0e064b",
    },
    text: {
      fontSize: 18,
      fontWeight: "600",
    },
  });

  
