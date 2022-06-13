import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../../globalStyles'

export const DateInfo = (props) => {
  return (
    <View style={props.start ? styles.dateStartContainer : styles.dateContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.dateTitleText}>{props.start ? "Start Date" : "End Date"}</Text>
        <Image style={styles.iconStart} source={props.start ? require('../../../../assets/images/icon-start.png') : require('../../../../assets/images/icon-end.png')} />
      </View>
      <Text style={styles.dateText}>{props.props.startDate}</Text>
      <Text style={styles.yearTimeText}>{props.props.startYearTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dateContainer: {
    flex: 1,
    marginLeft: globalStyles.spacingMD,
  },
  dateStartContainer: {
    flex: 1,
    marginLeft: globalStyles.spacingMD,
    borderRightWidth: 1,
    borderRightColor: globalStyles.borderColor
  },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
      marginBottom: 11
    },
      dateTitleText: {
        fontFamily: 'Rubik500',
        fontSize: 9,
        opacity: .5,
        marginRight: 53,
        lineHeight: 10,
        textTransform: 'uppercase'
      },
      iconStart: {
        height: 12,
        width: 12
      },
    dateText: {
      fontFamily: 'Rubik500',
      fontSize: 19,
      lineHeight: 22,
      textTransform: 'uppercase'
    },
    yearTimeText: {
      fontFamily: 'Rubik400',
      fontSize: 13,
      color: globalStyles.black,
      lineHeight: 15,
      marginBottom: 15
    }
})