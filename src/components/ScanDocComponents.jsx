import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FileDocIcon from '../assets/images/scandocicon.svg';

const ScanDocComponents = ({ passportNumber,text }) => {
  const [passportDocument, setPassportDocument] = useState(null);

  const submitPassport = () => {
    // Here you can implement the code to handle the submission of the passport document,
    // using the passportNumber and passportDocument state variables.
    console.log(`Submitting passport document with number ${passportNumber} and document ${passportDocument}`);
  };

  return (
    <View style={styles.scanContDoc}>
      <TouchableOpacity onPress={submitPassport}>
        <View style={styles.scanBoxDoc}>
          <FileDocIcon style={styles.fileDocIcon} width={130} height={24} />
          <Text style={styles.scanTextDoc}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ScanDocComponents;

const styles = StyleSheet.create({
  scanContDoc: {
    flexDirection: 'row',
    flex:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanBoxDoc: {
    borderColor: "gray",
    height:52, 
    width: 325, 
    borderWidth: 0.7, 
    borderRadius: 8.8,
    marginBottom: 30,
    bottom:-10,
  },
  fileDocIcon: {
    bottom: -12,
    left: -42,
  },
  scanTextDoc: {
    paddingLeft: 50,
    top: -20,
    width:296,
    fontFamily:'Roboto',
    fontSize:15,
    color: 'gray',
  },
});
