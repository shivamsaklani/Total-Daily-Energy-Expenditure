import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

// Screen width for positioning
const { width } = Dimensions.get("window");

interface SwipeCardProps {
  title: string;
  image: string;
  onSwipeComplete: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ title, image, onSwipeComplete }) => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.translationX) > width * 0.3) {
        // If swiped far enough, remove the card
        translateX.value = withSpring(event.translationX > 0 ? width : -width, {}, () => {
          runOnJS(onSwipeComplete)();
        });
      } else {
        // If not swiped far, return to center
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 100, // Position at the top center
    left: width * 0.1,
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
  },
});
