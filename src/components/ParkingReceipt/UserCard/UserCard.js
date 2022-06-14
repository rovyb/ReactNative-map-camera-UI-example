import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../../globalStyles'

export const UserCard = (props) => {
  return (
    <View style={styles.userCardContainer}>
      <Image style={styles.profilePic} source={props.props.profilePic} />
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileText}>{props.props.name}</Text>
        <Text style={styles.profileTextSub}>{props.props.title}</Text>
      </View>
      <View style={styles.messageIconContainer}>
        <Image style={styles.messageIcon} source={require('../../../../assets/images/icon-messages.png')}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  userCardContainer: {
    backgroundColor: '#F4F6F8',
    paddingLeft: 24,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: globalStyles.radiusContainer,
    borderBottomRightRadius: globalStyles.radiusContainer,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: 12,
    marginTop: 18,
    marginBottom: 22,
  },
    profileText: {
      fontFamily: 'Rubik400',
      fontSize: 12,
      lineHeight: 14
    },
    profileTextSub: {
      fontFamily: 'Rubik400',
      fontSize: 14,
      lineHeight: 18,
      color: "#000",
      opacity: 0.6,
    },

  messageIconContainer: {
    flex: 1,
    marginRight: 24, 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
    messageIcon: {
      height: 24, 
      width: 24, 
    }


})