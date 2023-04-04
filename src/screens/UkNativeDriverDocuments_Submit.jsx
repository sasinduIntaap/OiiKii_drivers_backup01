import { StyleSheet, Text, View, Platform, ScrollView} from "react-native";
import React, { useState} from "react";
import ScanCamLogo from "../assets/images/icon _camera_.svg";
import RadioButtonChoice from "./RadioButtonChoice";
import ScanDocComponents from "./ScanDocComponents";
import Primary_button from "./Primary_button";
import Building from "../assets/images/Building.svg";
import CustomTextInput from "./CustomTextInput";

const options = [
  { label: "Passport", value: "Passport" },
  { label: "Residence Permit", value: "Residence Permit" },
  { label: "Birth Certificate", value: "Birth Certificate" },
];

const UkNativeDriverDocuments_Submit = () => {
  const [text, setText] = useState(null);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const boxShadowStyle = generateBoxShadowStyle( -2,4,"white",0.3,3,25,"grey");

  return (
    <View style={styles.container}>
      <Building style={styles.buildingBack} />
      <View style={[styles.card, boxShadowStyle]}>
        <ScrollView>
          <View>
            <Text style={styles.heading}>
              Submit your documents and details!
            </Text>
          </View>
          <Text style={styles.textInputHeading}>UTR Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter UTR number"
            keyboardType="numeric"
          />
          <Text style={styles.textInputHeading}>NI Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter NI number"
            keyboardType="default"
          />
          <Text style={styles.textInputHeading}>Driving License Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter your driving license number"
            keyboardType="default"
          />
          <Text style={styles.textInputHeading}>Scan Your Driving License</Text>
          <View style={styles.scanCont}>
            <View
              style={{
                borderColor: "black",
                height: 90,
                width: 141,
                borderWidth: 0.5,
                borderRadius: 7.5,
              }}
            >
              <Text style={styles.scan}>Front</Text>
              <ScanCamLogo style={styles.scanCamLogo} width={140} height={18} />
              <Text style={styles.scanText}>Click here to scan</Text>
            </View>
            <Text style={{ paddingLeft: 21, paddingRight: 21}}></Text>
            <View
              style={{
                borderColor: "black",
                height: 90,
                width: 141,
                borderWidth: 0.5,
                borderRadius: 7.5,
              }}
            >
              <Text style={styles.scan}>Back</Text>
              <ScanCamLogo style={styles.scanCamLogo} width={140} height={18} />
              <Text style={styles.scanText}>Click here to scan</Text>
            </View>
          </View>
          <Text style={{ paddingVertical: 1,  fontWeight: "bold",}} >
            Passport or Residence Permit or Birth Certificate Number
          </Text>
          <Text style={{ paddingVertical: 3, fontSize: 12 }}>
            Select one of these which you can provide
          </Text>
          <RadioButtonChoice values={options}/>
          <Text style={styles.textInputHeading}>Attach Your Address Proof </Text>
          <ScanDocComponents text="Click here to submit your proof" />
          <Text style={styles.textInputHeading} >Attach CRB if any (Criminal Records Bureau) doc</Text>
          <ScanDocComponents text="Click here to submit your proof" />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Primary_button text="Next" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid
) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: { width: xOffset, height: yOffset },
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

const styles = StyleSheet.create({
  container: {
    height: 1055,
    alignItems: "center",
    justifyContent: "center",
  },
  buildingBack: {
    flex: 1,
    resizeMode: "cover",
    bottom: -650,
    left: -1,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 19,
    color: "#2F2F2F",
    fontWeight: "bold",
    marginBottom: 10,
    lineHeight: 25,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 11,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: 375,
    top: -120,
    marginVertical: 10,
  },
  // input: {
  //   height: 40,
  //   borderColor: "gray",
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   paddingLeft: 10,
  // },
  scanCont: {
    flexDirection: "row",
    height: 110,
    alignItems: "center",
  },
  scan: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 14,
    top: 15,
  },
  scanCamLogo: {
    position: "absolute",
    bottom: 33,
  },
  scanText: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 14,
    bottom: -45,
  },
  textInputHeading: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: 'rgba(47, 47, 47, 1)',
    fontWeight: "bold",
    lineHeight: 16,
 },
});

export default UkNativeDriverDocuments_Submit;
