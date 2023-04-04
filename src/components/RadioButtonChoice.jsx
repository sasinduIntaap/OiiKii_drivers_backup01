import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import ScanDocComponents from "./ScanDocComponents";
import CustomTextInput from "./CustomTextInput";

const RadioButtonChoice = ({ values }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [passportNumber, setPassportNumber] = useState("");

    const [text, setText] = useState(null);
  
    const handleTextChange = (newText) => {
      setText(newText);
    }

  const options = [
    { label: "Passport", value: "Passport" },
    { label: "Residence Permit", value: "Residence Permit" },
    { label: "Birth Certificate", value: "Birth Certificate" },
  ];

  const renderOptions = () => {
    console.log(values);
    return values.map((option) => {
      return (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => setSelectedOption(option.value)}
        >
          <View style={styles.radio}>
            {selectedOption === option.value && (
              <View style={styles.selectedRadio} />
            )}
          </View>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View>
      {renderOptions()}
      {selectedOption === "Passport" && (
        <View>
          <Text style={styles.optionTitle}>Enter Your Passport Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter your passport number"
            keyboardType="default"
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your passport number"
            value={passportNumber}
            onChangeText={setPassportNumber}
          /> */}
          <Text style={styles.optionTitle}>Attach Your Passport Doc</Text>
          <ScanDocComponents text="Click here to submit passport doc" />
        </View>
      )}
      {selectedOption === "Residence Permit" && (
        <View>
          <Text style={styles.optionTitle}>Enter Your Residence Permit Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter your residence permit number"
            keyboardType="default"
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your residence permit number"
            value={passportNumber}
            onChangeText={setPassportNumber}
          /> */}
          <Text style={styles.optionTitle}>Attach Your Residence Permit Doc</Text>
          <ScanDocComponents text="Click here to submit residence permit" />
        </View>
      )}
      {selectedOption === "Birth Certificate" && (
        <View>
          <Text style={styles.optionTitle}>Enter Your Birth Certificate Number</Text>
          <CustomTextInput
            onChangeText={handleTextChange}
            value={text}
            placeholder="Enter your birth certificate number"
            keyboardType="default"
          />
          {/* <TextInput
            style={styles.input}
            placeholder="Enter your birth certificate number"
            value={passportNumber}
            onChangeText={setPassportNumber}
          /> */}
          <Text style={styles.optionTitle}>Attach Your Birth Certificate Doc</Text>
          <ScanDocComponents text="Click here to submit birth certificate" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  selectedRadio: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#000000",
  },
  optionText: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "bold",
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
  optionTitle: {
    lineHeight: 15,
    fontWeight: "bold",
  },
});

export default RadioButtonChoice;
