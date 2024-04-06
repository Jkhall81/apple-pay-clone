import React, { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { View, useWindowDimensions } from "react-native";
import {
  cancelAnimation,
  useSharedValue,
  withDecay,
  clamp,
  withClamp,
} from "react-native-reanimated";
import { Card } from "./Card";
import { cards } from "../../utils/utils";

export const CardsList = () => {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();

  const activeCardIndex = useSharedValue(null);
  const scrollY = useSharedValue(0);

  const maxScrollY = listHeight - screenHeight + 70;

  const pan = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(scrollY);
    })
    .onStart(() => {})
    .onChange((e) => {
      scrollY.value = clamp(scrollY.value - e.changeY, 0, maxScrollY);
    })
    .onEnd((e) => {
      scrollY.value = withClamp(
        { min: 0, max: maxScrollY },
        withDecay({ velocity: -e.velocityY })
      );
    });
  return (
    <GestureDetector gesture={pan}>
      <View
        style={{ padding: 10, marginTop: 20 }}
        onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}
      >
        {cards.map((card, index) => (
          <Card
            activeCardIndex={activeCardIndex}
            index={index}
            key={index}
            card={card}
            scrollY={scrollY}
          />
        ))}
      </View>
    </GestureDetector>
  );
};
