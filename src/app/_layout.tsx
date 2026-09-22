import { DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme, View } from 'react-native';
import BottomTab from '../components/app-tabs';
import Navigation from '../components/navbar';

SplashScreen.preventAutoHideAsync();

const AppTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    text: '#ffffff',
    card: '#0b0f14',
    border: '#26313d',
    primary: '#62e6ff',
  },
};

export default function TabLayout() {

  useEffect(() => {SplashScreen.hideAsync();}, []);
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
 <View style={{ flex: 1, backgroundColor: '#000000' }}>
    <ThemeProvider value={AppTheme}>
   
      <Navigation title="Customers" />
      <BottomTab />
    </ThemeProvider>
  </View>

  );
}
