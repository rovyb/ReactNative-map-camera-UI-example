import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import * as globalStyles from '../../../globalStyles'

//Props: colorSwap - icon - text - onPress

export const Button = (props) => {
  return (
    <TouchableOpacity style={props.colorSwap ? styles.buttonContainerSwap : styles.buttonContainer} onPress={props.onPress}>
      {props.icon ? <Image source={props.icon} style={styles.buttonIcon}/> : null}
      <Text style={props.colorSwap ? styles.buttonTextSwap : styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 60,
    backgroundColor: globalStyles.black,
    borderRadius: globalStyles.radiusContainer,
    textTransform: 'uppercase',
    boxShadow: '0 2 12 rgba(0, 0, 0, 0.13)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
    buttonIcon: {
      height: 18,
      width: 20,
      marginLeft: 22,
    },
    buttonText: {
      fontFamily: 'Rubik900',
      fontSize: globalStyles.fontSizeButton,
      color: globalStyles.white,
      width: '100%',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: 20.15

    },
  
  buttonContainerSwap: {
    width: '100%',
    height: 60,
    backgroundColor: globalStyles.white,
    borderRadius: globalStyles.radiusContainer,
    textTransform: 'uppercase',
    boxShadow: '0 2 12 rgba(0, 0, 0, 0.13)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
    buttonTextSwap: {
      fontFamily: 'Rubik900',
      fontSize: globalStyles.fontSizeButton,
      color: globalStyles.black,
      width: '100%',
      textAlign: 'center',
      textTransform: 'uppercase',
      lineHeight: 20.15

    },
})
