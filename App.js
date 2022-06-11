import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "@use-expo/font";
import {Map} from './src/Map/Map'
import {ReservationScreen} from './src/ReservationScreen/ReservationScreen'


const address = '23 Landview Drive, Dix Hills, Ny' 

const customFonts = {Rubik: require('./assets/fonts/Rubik.ttf')}

export default function App() {
  const [loaded] = useFonts(customFonts);
  if (!loaded) {
    return null;
  }

  return (
    <View style={{ ...styles.container, fontFamily: 'Rubik'}}>
      <Map address={address}/>
      <ReservationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
