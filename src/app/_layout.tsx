import {DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../components/navbar';
import { useEffect } from 'react';
import { Colors, ThemeColor } from '../constants/theme';
import BottomTab from '../components/app-tabs';

SplashScreen.preventAutoHideAsync();

const AppTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    text: Colors.light.text,
  },
};

export default function TabLayout() {

  useEffect(() => {SplashScreen.hideAsync();}, []);
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
 <View style={{ flex: 1}}>
    <ThemeProvider value={AppTheme}>
   
      <Navigation title="Customers" />
      <BottomTab />
    </ThemeProvider>
  </View>

  );
}
