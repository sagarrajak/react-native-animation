import { Button, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function BallAnimation() {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);

  const onpress = () => {
    width.value = withSpring(width.value === 100 ? 200 : 100);
    translateX.value = withSpring(translateX.value === 0 ? 100 : 0);
  };

  const animateStyles = useAnimatedStyle(() => ({
    width: width.value,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View>
      <Button title="click me" onPress={onpress} />
      <Animated.View
        style={[{ width, height: 100, backgroundColor: 'red' }, animateStyles]}
      />
    </View>
  );
}
