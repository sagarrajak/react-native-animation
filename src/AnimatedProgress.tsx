import { View, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import Svg, { Rect } from 'react-native-svg';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

export function AnimatedProgress() {
  const width = useSharedValue(0);

  const animatedStyle = useAnimatedProps(() => ({
    width: width.value,
  }));

  const onpress = () => {
    if (width.value > 200) return;
    width.value = withTiming(width.value + 10, {
      duration: 10,
      easing: Easing.linear,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="press me 1" onPress={onpress} />
      <Svg width={200} height={150}>
        <Rect x={0} y={100} width={200} height={50} fill="#e0e0e0" rx={10} />
        {/* Red fill on top */}
        <AnimatedRect
          height={50}
          fill="red"
          y={100}
          x={0}
          animatedProps={animatedStyle}
        />
      </Svg>
    </View>
  );
}
