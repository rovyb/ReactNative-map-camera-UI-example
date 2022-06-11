import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react'

export const ReservationScreen = (props) => {
  return (
    <View style={styles.resContainer}>
      <Image style={styles.iconClose} source={require('../../assets/images/icon-close.png')} />
      <Text style={styles.header}>Nice! Your Monthly parking is Confirmed.</Text>
      <Text style={styles.subheader}>Your reservation details are below.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(246, 198, 45, .75)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 16,
    color: '#000',
  },
    iconClose: {
      zIndex: 5,
      height: 20,
      width: 20,
      marginTop: 58,
      marginBottom: 34
    },
    header: {
      fontWeight: '900',
      fontSize: 20,
      textTransform: 'uppercase',
      lineHeight: 24,
      marginRight: 40,
      marginBottom: 8
    },
    subheader: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 18,
      color: '#000',
      opacity: .6,
    }



})