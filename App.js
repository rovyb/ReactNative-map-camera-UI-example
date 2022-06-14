import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import {useState} from 'react';
import { Map } from './src/components/Map/Map';
import {ReservationScreen} from './src/components/ReservationScreen/ReservationScreen'

const customFonts = {
  Rubik400: require('./assets/fonts/Rubik400.ttf'),
  Rubik500: require('./assets/fonts/Rubik500.ttf'),
  Rubik700: require('./assets/fonts/Rubik700.ttf'), 
  Rubik900: require('./assets/fonts/Rubik900.ttf')
}


export default function App() {
  const [address, setAddress] = useState()
  const [loaded] = useFonts(customFonts);
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {address ? <Map address={address} /> : <View></View>}
      <ReservationScreen setAddress={setAddress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
  },
});
