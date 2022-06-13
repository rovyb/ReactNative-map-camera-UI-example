import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../../globalStyles'
export const UserActions = (props) => {
  return (
    <View style={styles.actionsContainer}>
      <View style={styles.actionIconContainer}>
        <Image style={styles.actionsIcon} source={props.icon} />
      </View>
      <Text style={styles.actionText}>{props.text}</Text>
      <View style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Image style={styles.arrowIcon} source={require('../../../../assets/images/icon-arrow.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    borderTopWidth: 1,
    borderColor: globalStyles.borderColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: globalStyles.spacingMD,
    paddingTop: 16,
    paddingBottom: 18,

  },
    actionIconContainer: {
      backgroundColor: '#000', 
      marginRight: 12, 
      borderRadius: '50%',
      height: 24, 
      width: 24, 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
      actionsIcon: {
        height: 12,
        width: 12,
      },
    actionText: {
      fontFamily: 'Rubik400',
      fontSize: 14,
      lineHeight: 17,
      color: globalStyles.black
    },
      arrowIcon: {
        height: 12,
        width: 12,
      }
})