import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScanCamLogo from "../assets/svg_icons/camera_icon.svg";
import PhotoUpload from "./PhotoUpload";

const ScanImageCont = () => {
  return (
    <View style={styles.scanCont}>
        <PhotoUpload  title='front' discription='Click here to scan' width={146} height={90}/>
        {/* <View
          style={{
            borderColor: "black",
            height: 90,
            width: 146,
            borderWidth: 0.5,
            borderRadius: 7.5,
          }}
        >
          <Text style={styles.scan}>Front</Text>
          <ScanCamLogo style={styles.scanCamLogo} width={145} height={19} />
          <Text style={styles.scanText}>Click here to scan</Text>
        </View> */}

      <Text style={{ paddingLeft: 14, paddingRight: 14 }}></Text>

      <PhotoUpload  title='back' discription='Click here to scan' width={146} height={90}/>
        {/* <View
          style={{
            borderColor: "black",
            height: 90,
            width: 146,
            borderWidth: 0.5,
            borderRadius: 7.5,
          }}
        >
          <Text style={styles.scan}>Back</Text>
          <ScanCamLogo style={styles.scanCamLogo} width={145} height={19} />
          <Text style={styles.scanText}>Click here to scan</Text>
        </View> */}

    </View>
  );
};

export default ScanImageCont;

const styles = StyleSheet.create({
  scanCont: {
    flexDirection: "row",
    height: 155,
    alignItems: "center",
    justifyContent:'center'
  },
//   scan: {
//     fontFamily: "Roboto",
//     fontSize: 12,
//     fontWeight: "700",
//     textAlign: "center",
//     lineHeight: 14,
//     top: 15,
//   },
//   scanCamLogo: {
//     position: "absolute",
//     bottom: 33,
//   },
//   scanText: {
//     fontFamily: "Roboto",
//     fontSize: 12,
//     fontWeight: "300",
//     textAlign: "center",
//     lineHeight: 14,
//     bottom: -45,
//   },
});
