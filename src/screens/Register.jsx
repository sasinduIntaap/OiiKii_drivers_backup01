import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native';
import CreateNewAccount from '../components/SignUp_stack/CreateNewAccount';
import VerifyMethod from '../components/SignUp_stack/VerifyMethod';
import VerifyAccount from '../components/SignUp_stack/VerifyAccount';
import ProfilePicture from '../components/SignUp_stack/ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Progress_Bar from '../components/Progress_Bar';
import SignUpMainContainer from '../components/SignUp_stack/SignUpMainContainer';
import SignUpContainer_elevated from '../components/SignUp_stack/SignUpContainer_elevated';
import UkNativeDriverDocuments_Submit from './UkNativeDriverDocuments_Submit';
import AboutYou from '../components/SignUp_stack/AboutYou';
import UkNativeDriverDocumentsforPSV_HGV from './UkNativeDriverDocumentsforPSV_HGV';






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
  const [progressBar,setProgressBar] = useState(0);
  const phoneInput = useRef(null);
  const navigation = useNavigation();


  useEffect(()=>{},[
    console.log('sign up stage '+signUp_stage)
  ]);
  

  const setProgressBarValue = () => {
    if(signUp_stage >= 1){
      setProgressBar(10);
    }
  }
  

  const handleSignUp = () => {
    // handle sign-up logic here
    setSignUp_stage(signUp_stage + 1);
    console.log('sign up pressed');
    // console.log(signUp_stage);
    if(signUp_stage >=2){
      navigation.setOptions({

        title: <Progress_Bar progress={progressBar} />,
        headerTitleAlign:'center'
    
    });
    }

    setProgressBarValue();

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
  }else if(signUp_stage == 4){
    return(
      <AboutYou text='Next' onPress={handleSignUp}/>

      

    )
  }else if(signUp_stage == 5){
    return (
      <UkNativeDriverDocuments_Submit />
      // <UkNativeDriverDocumentsforPSV_HGV/>
    );
  }
}

export default Register

