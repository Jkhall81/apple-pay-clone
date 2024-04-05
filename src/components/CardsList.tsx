import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { View, Image } from "react-native";
import { cards } from "../../utils/utils";

export const CardsList = () => {
  const pan = Gesture.Pan()
    .onStart(() => {
      console.log("Panning started");
    })
    .onChange((e) => {
      console.log("Panning. Scrolled on Y: ", e.changeY);
    })
    .onEnd(() => {
      console.log("Panning ended!");
    });
  return (
    <GestureDetector gesture={pan}>
      <View style={{ padding: 10, paddingTop: 20 }}>
        {cards.map((card, index) => (
          <Image
            key={index}
            style={{
              width: "100%",
              marginVertical: 5,
              height: undefined,
              aspectRatio: 7 / 4,
            }}
            source={card}
          />
        ))}
      </View>
    </GestureDetector>
  );
};
