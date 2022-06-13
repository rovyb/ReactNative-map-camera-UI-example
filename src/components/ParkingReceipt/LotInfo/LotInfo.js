import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../../globalStyles'

export const LotInfo = (props) => {
  return (
    <View style={styles.lotInfoContainer}>
    <View style={styles.lotInfo} >
      <View style={styles.lotText}>
        <Text style={styles.lotName}>{props.props.lotName}</Text>
        <Text style={styles.lotAddress}>{props.props.lotAddress}</Text>
      </View>
      <Image style={styles.iconMore} source={require('../../../../assets/images/icon-more.png')} />
    </View>
    <View style={styles.spotDirectionsContainer}>
      <Text style={styles.spotText}>{props.props.spot}</Text>
      <Image style={styles.parkingDirectionPicture} source={require('../../../../assets/images/icon-directions.png')} />
      <Text style={styles.getDirections}>Get Directions</Text>
    </View>
    <View style={styles.ellipse1} />
    <View style={styles.ellipse2} />
  </View>
  
  )
}

const styles = StyleSheet.create({
  lotInfoContainer: {
    borderBottomColor: globalStyles.borderColor,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderBottomStyle: 'dashed'
    
  },
    lotInfo: {
      marginLeft: 24,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
        lotName: {
          fontFamily: 'Rubik500',
          fontSize: globalStyles.fontSizeTicketHeader,
          lineHeight: 22
          
        },
        lotAddress: {
          fontFamily: "Rubik400",
          fontSize: 13,
          lineHeight: 18,
          color: "#000",
          opacity: 0.6,
          lineHeight: 22
        },
      iconMore: {
        height: 18,
        width: 5,
        marginLeft: 25
      },
      spotDirectionsContainer: {
        marginLeft: 24,
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'row',
        textTransform: 'uppercase',
        marginBottom: 30
        
        
      },
        spotText: {
          fontFamily: 'Rubik700',
          fontSize: 11,
          textTransform: 'uppercase',
          lineHeight: 13,
          marginRight: 22
        },
        parkingDirectionPicture: {
          marginRight: globalStyles.spacingXS
        },
        getDirections: {
          fontFamily: 'Rubik700',
          color: globalStyles.linkColor,
          textTransform: 'uppercase'
        },
      ellipse1: {
        backgroundColor: globalStyles.yellow,
        borderRadius: '50%',
        position: 'absolute',
        left: -8,
        bottom: -8,
        height: 16,
        width: 16
      },
      ellipse2: {
        backgroundColor: globalStyles.yellow,
        borderRadius: '50%',
        position: 'absolute',
        right: -8,
        bottom: -8,
        height: 16,
        width: 16
      }
})