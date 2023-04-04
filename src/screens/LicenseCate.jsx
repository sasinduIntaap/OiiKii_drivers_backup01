import {
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    TextInput,
  } from "react-native";
  import React from "react";
  import ScanCamLogo from "../assets/svg_icons/camera_icon.svg";
  import RadioButtonChoice from "../components/RadioButtonChoice";
  import ScanDocComponents from "../components/ScanDocComponents";
  import Primary_button from "../components/Primary_button";
  import Building from "../assets/svg_icons/Building.svg";
  
  const options = [
    { label: "Passport", value: "Passport" },
    { label: "Residence Permit", value: "Residence Permit" },
    { label: "Birth Certificate", value: "Birth Certificate" },
  ];
  
  export default function LicenseCate() {
    const boxShadowStyle = generateBoxShadowStyle(
      -2,
      4,
      "white",
      0.3,
      3,
      25,
      "grey"
    );
  
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
            <Text>UTR Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your UTR number"
              keyboardType="numeric"
            />
            <Text>NI Number</Text>
            <TextInput style={styles.input} placeholder="Enter your NI number" />
            <Text>Driving License Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your driving license number"
            />
            <Text>Scan Your Driving License</Text>
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
              <Text style={{ paddingLeft: 9, paddingRight: 9 }}></Text>
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
            <Text style={{ paddingVertical: 1 }}>
              Passport or Residence Permit or Birth Certificate Number
            </Text>
            <Text style={{ paddingVertical: 3, fontSize: 12 }}>
              Select one of these which you can provide
            </Text>
            <RadioButtonChoice values={options} />
            <Text>Attach Your Address Proof </Text>
            <ScanDocComponents text="Click here to submit your proof" />
            <Text>Attach CRB if any (Criminal Records Bureau) doc</Text>
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
      height: 1021,
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
      marginBottom: 13,
      lineHeight: 24,
    },
    card: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 11,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: 350,
      top: -120,
      marginVertical: 10,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 10,
    },
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
  });

  