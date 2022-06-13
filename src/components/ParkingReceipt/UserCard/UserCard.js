import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as globalStyles from '../../../../globalStyles'

export const UserCard = (props) => {
  return (
    <View style={styles.userCardContainer}>
      <Image style={styles.profilePic} source={props.props.profilePic} />
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
  }
})