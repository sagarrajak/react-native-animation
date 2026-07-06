import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'red',
  },
  cube: {
    top: 50,
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
});

export function ShakeAnimation() {
  const translateY = useSharedValue(0);

  const animateStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const onpress = () => {
    translateY.value = withSequence(
      withTiming(-500, { duration: 500 }),
      withRepeat(
        withTiming(-250, { duration: 500, easing: Easing.inOut(Easing.quad) }),
        5,
        true,
      ),
      withTiming(0, { duration: 500 }),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="start" onPress={onpress} />
      <View style={style.container}>
        <Animated.View style={[style.cube, animateStyle]} />
      </View>
    </View>
  );
}
