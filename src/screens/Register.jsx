import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native';
import CreateNewAccount from '../components/SignUp_stack/CreateNewAccount';
import VerifyMethod from '../components/SignUp_stack/VerifyMethod';
import VerifyAccount from '../components/SignUp_stack/VerifyAccount';
import ProfilePicture from '../components/SignUp_stack/ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const Stack = createStackNavigator();

const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState('');
  const [signUp_stage, setSignUp_stage] = useState(0);
  const phoneInput = useRef(null);
  const navigation = useNavigation();
  

  

  const handleSignUp = () => {
    // handle sign-up logic here
    setSignUp_stage(signUp_stage + 1);
    console.log('sign up pressed');
    console.log(signUp_stage);
    if(signUp_stage >=2){
      navigation.setOptions({

        title: 'progress bar',
        headerTitleAlign:'center'
    
    });
    }
  };

  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  if(signUp_stage == 0){
    // create new account
    return (
      <CreateNewAccount onPress={handleSignUp}/>
    );
  }else if(signUp_stage == 1){
    //verify OTP method selection
    return (
      <VerifyMethod onPress={handleSignUp}/>
    );
    
  }else if(signUp_stage == 2){
      //enter the OTP 
    return (
      <VerifyAccount text='Verify' onPress={handleSignUp}/>
    );

  }else if(signUp_stage == 3){
    return (
      <ProfilePicture text='Next' onPress={handleSignUp} />
    );
  }
}

export default Register

