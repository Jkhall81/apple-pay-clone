import Animated, { useDerivedValue } from "react-native-reanimated";

export const Card = ({ card, scrollY }) => {
  const translateY = useDerivedValue(() => -scrollY.value);
  return (
    <Animated.Image
      style={{
        width: "100%",
        marginVertical: 5,
        height: undefined,
        aspectRatio: 7 / 4,
        transform: [
          {
            translateY: translateY,
          },
        ],
      }}
      source={card}
    />
  );
};
