import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default CustomTextInput;