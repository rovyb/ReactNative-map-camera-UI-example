import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react'
import * as globalStyles from '../../../globalStyles'
import { ParkingReceipt } from '../ParkingReceipt/ParkingReceipt';

export const ReservationScreen = (props) => {
  return (
    <View style={styles.resContainer}>
      <Image style={styles.iconClose} source={require('../../../assets/images/icon-close.png')} />
      <Text style={styles.header}>Nice! Your Monthly parking is Confirmed.</Text>
      <Text style={styles.subheader}>Your reservation details are below.</Text>
      <ParkingReceipt />
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
    paddingHorizontal: globalStyles.spacingSM,
    color: '#000',
  },
    iconClose: {
      height: 20,
      width: 20,
      marginLeft: 10, // 10 + 16(padding on resContainer) = 26px 
      marginTop: 58,
      marginBottom: globalStyles.spacingXL
    },
    header: {
      fontWeight: '900',
      fontSize: 20,
      textTransform: 'uppercase',
      lineHeight: 24,
      marginLeft: 8, // 8 + 16(padding on resContainer) = 24px 
      marginRight: globalStyles.spacingXXL - globalStyles.spacingSM, //subtracting rescontainer padding to make this exactly 40 px
      marginBottom: globalStyles.spacingXS
    },
    subheader: {
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 18,
      color: '#000',
      opacity: .6,
      marginLeft: 8, // 8 + 16(padding on resContainer) = 24px
      marginBottom: globalStyles.spacingMD
    }



})