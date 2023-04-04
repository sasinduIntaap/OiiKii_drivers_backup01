import React,{useState} from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import DropDown from '../assets/svg_icons/icon _chevron_left_.svg';
import CountryPicker from 'react-native-country-picker-modal'

const CustomTextInput = (props) => {
  const [countryModalOpen,setCountryModalOpen] = useState(false);
  return (
    <>
    <View style={props.icon == 'dropDown' ? styles.iconContainer : styles.input}>
      <TextInput
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      editable={props.editable}
    />
    {props.icon == 'dropDown' ? <View style={{right:10}}>
      <DropDown style={{transform:[{rotate:'270deg'}]}}/>
    </View> : <View></View>}
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
    width:'100%',
    justifyContent:'center',
    

  },
  iconContainer:{
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    // height:'100%'

  }
});

export default CustomTextInput;
 
//pulled from vishnu_intaap