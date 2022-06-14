import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export const Map = (props) => {
  const [coords, setCoords] = useState()

  console.log(props)
  
  useEffect(() => {
    const location = async () => {
      const response = await Location.geocodeAsync(props.address)
      setCoords(response[0])
    }
    const getCoordinates = location(props.address)
  }, [props.address])

  const mapRegion =  {
    latitude: coords?.latitude,
    longitude: coords?.longitude,
    latitudeDelta: .2,
    longitudeDelta: .2,
  } 


  return (
    coords ? <MapView style={styles.map} region={mapRegion}/> : <View style={{position: 'absolute'}}><Text>Loading</Text></View>
  )
}

const styles = StyleSheet.create({
    map: {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

});