import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState} from "react";
import * as globalStyles from "../../../globalStyles";
import { Button } from "../Button/Button";
import { ParkingReceipt } from "../ParkingReceipt/ParkingReceipt";
import {Camera} from "expo-camera";
import {CameraComponent} from '../Camera/Camera'

const buttonIcon = require("../../../assets/images/icon-camera.png");
const buttonText = "Identify your vehicle";

export const ReservationScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraOpen, setCameraOpen] = useState();

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(hasPermission);
    if (status === "granted") {
      setHasPermission(true);
      setCameraOpen(true);
    } else {
      console.log("Access denied");
    }
  };

  return (
    <View>
      {cameraOpen ? (
        <CameraComponent setCameraOpen={setCameraOpen} cameraOpen={cameraOpen}/>
      ) : (
        <View style={styles.resContainer}>
          <Image
            style={styles.iconClose}
            source={require("../../../assets/images/icon-close.png")}
          />
          <Text style={styles.header}>
            Nice! Your Monthly parking is Confirmed.
          </Text>
          <Text style={styles.subheader}>
            Your reservation details are below.
          </Text>
          <ParkingReceipt />
          <Button icon={buttonIcon} text={buttonText} onPress={openCamera} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: globalStyles.yellow,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingHorizontal: globalStyles.spacingSM,
    color: "#000",
  },
  iconClose: {
    height: 20,
    width: 20,
    marginLeft: 10, // 10 + 16(padding on resContainer) = 26px
    marginTop: 58,
    marginBottom: globalStyles.spacingXL,
  },
  header: {
    fontFamily: "Rubik900",
    fontSize: 20,
    textTransform: "uppercase",
    lineHeight: 24,
    marginLeft: 8, // 8 + 16(padding on resContainer) = 24px
    marginRight: globalStyles.spacingXXL - globalStyles.spacingSM, //subtracting rescontainer padding to make this exactly 40 px
    marginBottom: globalStyles.spacingXS,
  },
  subheader: {
    fontFamily: "Rubik400",
    fontSize: 13,
    lineHeight: 18,
    color: "#000",
    opacity: 0.6,
    marginLeft: 8, // 8 + 16(padding on resContainer) = 24px
    marginBottom: globalStyles.spacingMD,
  },
  button: {
    width: "100%",
    height: "100%",
  },
});
