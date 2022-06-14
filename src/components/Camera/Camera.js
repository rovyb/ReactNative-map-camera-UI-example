import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState} from "react";
import { Camera, CameraType } from "expo-camera";
import { Button } from "../Button/Button";
import * as globalStyles from "../../../globalStyles";


export const CameraComponent = (props) => {
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false)

  const closeCamera = () => {
    props.setCameraOpen(false)
  }

  const flip = () => {
    setType(type === CameraType.back ? CameraType.front: CameraType.back)
  }

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    if (photo) {
      setImage(photo.uri);
      setPreviewVisible(true)
    } else {
      return <Text>Error</Text>;
    }
  }

  const previewReturn = () => {
    setPreviewVisible(!previewVisible)
  }

  let camera = Camera

  return (
    <View style={styles.cameraComponentContainer}>
      {!previewVisible && <><View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraComponentClose} onPress={closeCamera}>
          <Image source={require('../../../assets/images/icon-close-white.png')} style={styles.closeIconWhite}/>
        </TouchableOpacity>
        <Camera
          ref={(r) => {
            camera = r
            }}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />
      </View>
      <Button text="Flip" colorSwap onPress={flip} />
      <Button text="Take Picture" colorSwap onPress={takePicture} />
      </>
      }
      {image && previewVisible && <View style={styles.previewContainer}>
          <Image source={{ uri: image }} style={styles.preview} />
          <Button colorSwap text="Return" onPress={previewReturn}/>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({ 
  cameraComponentContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingHorizontal: globalStyles.spacingSM,
    paddingBottom: globalStyles.spacingXXXL
  },
    cameraComponentClose: {
      zIndex: 20,
      position: 'absolute',
      left: 26,
      top: globalStyles.spacingXXXL,
    },
      closeIconWhite: {
        height: 25,
        width: 25
      },
    cameraContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      
    },
    fixedRatio: {
      flex: 1,
      aspectRatio: 1,
    },

  previewContainer: {
    position: 'absolute',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    top: 0,
    left: 0,
    backgroundColor: globalStyles.black,
    paddingHorizontal: globalStyles.spacingSM,
    paddingVertical: globalStyles.spacingXXXL,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
    preview: {
      height: 500,
      width: 300
    },


  
    
})