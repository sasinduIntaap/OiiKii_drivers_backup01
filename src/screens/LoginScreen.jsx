import React, { useState,useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';
import OiiKii_Logo from '../components/OiiKii_Logo';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import TandC_comp from '../components/TandC_comp';
import Checkbox from 'expo-checkbox';
import Buildings from '../assets/svg_icons/building.svg';
import {useNavigation} from '@react-navigation/native';
import Routes from '../constants/Routes';
import Social_Media_Login from '../components/Social_Media_Login';




const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState('');
  const [signUp_stage, setSignUp_stage] = useState(0);
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  const handleSignIn = () => {
    // handle sign-up logic here
    
    console.log('sign in pressed');
    
  };

  

  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  
    //////////////////////////////////////////////////////////////sign in\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    return (
      <>
      {/* <View style={styles.logo}> */}
      {/* this is the OiiKii logo */}
      {/* <OiiKii_Logo /> */}
      
      {/* </View> */}
      {/* main container */}
      <View style={styles.container}>
      {/* box shadow, elevated container begins */}
      <View style={styles.boxShadow}>
      <View style={{paddingBottom:'5%', justifyContent:'flex-start', width:'100%', marginLeft: '5%'}}>
      <Text style={styles.title}>Welcome Back!</Text>
      </View>
        
        <View style={{width:'100%', alignItems:'center'}}>
        <View style={{width:'100%',alignItems:'flex-start', paddingLeft:'12%'}}><Text style={{fontWeight:'bold'}}>Email</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        </View>
        <View style={{width:'100%', alignItems:'center'}}>
        <View style={{width:'100%',alignItems:'flex-start', paddingLeft:'12%'}}><Text style={{fontWeight:'bold'}}>Password</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        </View>
        
        
      
        <LinearGradient style={styles.signup_button} colors={['#F66F6F', '#DB0DC1']}>
          <TouchableOpacity style={{width:'100%', alignItems:'center'}} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.or}>Or</Text>
      <Social_Media_Login text='Continue with Google' mediaType='google'/>
      <Social_Media_Login text='Continue with Apple' mediaType='apple'/>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <Buildings />
      </View>
        
        
        
        
      </View>
      
      </>
    );
  
  
}

export default Register

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        
        
        

        
      },
      boxShadow: {
        elevation: 20,
        borderRadius: 11,
        height: 550,
        width:'80%',
        marginTop: '15%',
        alignItems: 'center',
        // justifyContent: 'center',
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
           marginTop: '5%'
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
      },
      loginButton: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        shadowColor: 'red',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        elevation: 2,
      },
      gradient: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      or: {
        color: '#818181',
        marginTop: 10,
        marginBottom: 20,
        },
        googleButton: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            borderColor:'#9D9D9D',
            width: '80%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            },
            googleButtonText: {
            color: '#000000',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 10,
            },
            appleButton: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            borderColor:'#9D9D9D',
            width: '80%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            },
            appleButtonText: {
            color: '#000000',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 10,
            }
      
      
      
      
});