import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, StyleSheet, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface SelectorProps<T> {
  values: T[];
  onSelect: (value: T) => void;
  defaultValue?: T;
  containerStyle?: object;
  textStyle?: object;
  subtitle?: string;
  subheading?:string;
}

const ITEM_HEIGHT = 50; // Height of each item
const VISIBLE_ITEMS = 5; // Must be an odd number for centering

const Selector = <T extends string | number>({
  values,
  onSelect,
  defaultValue,
  containerStyle,
  textStyle,
  subtitle,
  subheading
}: SelectorProps<T>) => {
  const initialIndex = values.indexOf(defaultValue || values[Math.floor(values.length / 2)]);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);
  const listRef = useRef<FlatList<T>>(null);

  useEffect(() => {
    if (selectedIndex !== -1) {
      listRef.current?.scrollToIndex({ index: selectedIndex, animated: true });
    }
  }, []);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);

    if (index >= 0 && index < values.length) {
      setSelectedIndex(index);
      onSelect(values[index]);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Fixed Center Marker with Subtitle */}
      <View style={styles.centerMarker}>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <Text style={styles.unit}>{subheading}</Text>
      </View>

      <FlatList
        ref={listRef}
        data={values}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        snapToOffsets={values.map((_, index) => index * ITEM_HEIGHT)}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        contentContainerStyle={{
          paddingVertical: (VISIBLE_ITEMS - 1) / 2 * ITEM_HEIGHT,
        }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={[styles.text, textStyle]}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    justifyContent: "center",
  },
  centerMarker: {
    position: "absolute",
    top: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
    width: "100%",
    height: ITEM_HEIGHT,
    borderRadius: 10,
    backgroundColor: "#9c9aad",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    bottom: -20,
  },
  unit: {
    fontSize: 18,
    position: "absolute",
    right: 10,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});

export default Selector;
