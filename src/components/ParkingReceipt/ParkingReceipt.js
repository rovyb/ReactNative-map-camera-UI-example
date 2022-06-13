import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../globalStyles'
import {LotInfo} from './LotInfo/LotInfo'
import {DateInfo} from './DateInfo/DateInfo'
import {UserActions} from './UserActions/UserActions'
import {UserCard} from './UserCard/UserCard'

export const ParkingReceipt = (props) => {

  return (
    <View style={styles.parkingContainer}>
      <Image style={styles.parkingImage}source={require('../../../assets/images/icon-parking.png')}/>
      <LotInfo props={props.lotInfo}/>
      <View style={styles.dateContainer}>
        <DateInfo start props={props.reservationInfo}/>
        <DateInfo props={props.reservationInfo}/>
      </View>
      <UserActions icon={require('../../../assets/images/icon-help.png')} text="View parking instructions" />
      <UserActions icon={require('../../../assets/images/icon-clock.png')} text="Purchase additional months" />
      <UserActions icon={require('../../../assets/images/icon-receipt.png')} text="View receipt for $272.95" />
      <UserCard props={props.userInfo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  parkingContainer: {
    width: '100%',
    height: 475,
    backgroundColor: '#fff',
    borderRadius: globalStyles.radiusContainer,
    marginBottom: globalStyles.spacingMD,

  },
    parkingImage: {
      marginLeft: 16,
      marginTop: -14,
      width: 34,
      height: 39,
      marginBottom: 19,
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'row',
    }
  



})