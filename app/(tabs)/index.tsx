import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper'

import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import Routes  from './../../routes';
import home from '@/pages/Home/home';

export default function HomeScreen() {
  return (
    <NavigationIndependentTree >
      <Routes />
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
