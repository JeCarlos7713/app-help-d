import { StyleSheet, View, Text } from 'react-native';
import {PaperProvider} from 'react-native-paper'
import Initial from '../../pages/Initial/initial';
import Login from '@/pages/Login/login';
import Home from '@/pages/Home/home'
import SuccessProcess from '@/pages/SuccessProcess/successProcess';

export default function HomeScreen() {
  return (
    <PaperProvider>
      <SuccessProcess processId='18299' />
    </PaperProvider>
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
