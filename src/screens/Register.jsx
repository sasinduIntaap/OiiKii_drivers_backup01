import React, { useState,useRef,useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native';
import CreateNewAccount from '../components/SignUp_stack/CreateNewAccount';
import VerifyMethod from '../components/SignUp_stack/VerifyMethod';
import VerifyAccount from '../components/SignUp_stack/VerifyAccount';



const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const Register = () => {
  useEffect(()=>{
    console.log('height ' + height);
    console.log('width ' + width);
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState('');
  const [signUp_stage, setSignUp_stage] = useState(0);
  const phoneInput = useRef(null);

  const handleSignUp = () => {
    // handle sign-up logic here
    setSignUp_stage(signUp_stage + 1);
    console.log('sign up pressed');
    console.log(signUp_stage);
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

  }
}

export default Register

const styles = StyleSheet.create({

    container: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height:'100%'
        
        
        

        
      },
      boxShadow: {
        padding:20,
        // marginBottom:10,
        // flex:6,
        elevation: 20,
        borderRadius: 11,
        maxHeight: 700,
        width:'80%',
        // marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        

      },

      title: {
        fontSize: 20,
        fontWeight: 'bold',
        
      },
      input: {
        width: '90%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 11,
        marginBottom: '7%',
        fontSize: 16,
        
      },
      signup_button: {
        width:'90%',
         height:50,
          justifyContent:'center',
           borderRadius:12,
           marginTop: '5%',
           
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:'bold'
      },
      logo:{
        
        alignItems:'center',
        
      },
      phoneNumberView: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:'3%',
        borderRadius:11
      },
      checkBoxView:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding:0,
        margin:0,
        
        // justifyContent:'space-evenly'

      },
      checkBox:{
        margin: 8,
      },
      checkBoxText:{
        fontSize: 15,
      }
      
      
      
      
})