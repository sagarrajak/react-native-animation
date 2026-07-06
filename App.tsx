/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BallAnimation from './src/StartedStyle';
import { AnimatedCircleCustom } from './src/AnimatedCircle';
import { BouncingBall } from './src/BouncingBall';
import { ShakeAnimation } from './src/ShakeAnimation';
import { AnimatedProgress } from './src/AnimatedProgress';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AnimatedApp /> */}
      <View style={{ flex: 1, marginTop: 60 }}>
        {/* <BallAnimation />
        <AnimatedCircleCustom /> */}
        {/* <BouncingBall /> */}
        {/* <ShakeAnimation /> */}
        <AnimatedProgress />
      </View>
    </SafeAreaProvider>
  );
}
export default App;
