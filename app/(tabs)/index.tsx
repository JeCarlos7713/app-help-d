import { StyleSheet, View, Text } from 'react-native';
import Initial from '../../pages/Initial/initial';
import Login from '@/pages/Login/login';

export default function HomeScreen() {
  return (
    <Login />
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
