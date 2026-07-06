import { Button, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

export function AnimatedCircleCustom() {
  const width = useSharedValue(4);
  const translatex = useSharedValue(0);
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  // const [state, setState] = useState<number>(4);

  const onPress = () => {
    width.value = withSpring(width.value + 10);
    translatex.value = withSpring(translatex.value + 20);
  };

  const animatedProps = useAnimatedProps(() => ({
    r: width.value,
    transform: [{ translateX: translatex.value }],
  }));
  return (
    <View>
      <Button title="Press me" onPress={onPress} />
      {/* <Text>{state}</Text> */}
      <Svg>
        <AnimatedCircle
          cx="50"
          cy="50"
          r={width.value}
          animatedProps={animatedProps}
          fill={'blue'}
        />
      </Svg>
    </View>
  );
}
