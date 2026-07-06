import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
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
  ball: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
  },
});

export function BouncingBall() {
  const translateX = useSharedValue(0);

  const animateStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateX.value }],
  }));

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(-500, {
        duration: 1000,
        easing: Easing.inOut(Easing.quad),
      }),
      -1,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <Animated.View style={[style.ball, animateStyle]}></Animated.View>
    </View>
  );
}
