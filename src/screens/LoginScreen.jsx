import React, { useState,useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Buildings from '../assets/svg_icons/building.svg';
import {useNavigation} from '@react-navigation/native';
import Social_Media_Login from '../components/Social_Media_Login';
import Primary_button from '../components/Primary_button';
import SignUpContainer_elevated from '../components/SignUp_stack/SignUpContainer_elevated';





const LoginScreen = () => {
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

  
    
    return (
      <>
      
      
      <SignUpContainer_elevated illustration='login' top='5%' padding={10}>
        
      <View style={{paddingBottom:'5%', justifyContent:'flex-start', width:'100%', marginLeft: '5%'}}>
      <Text style={styles.title_text}>Welcome Back!</Text>
      </View>
        
        <View style={styles.texhtInpu_container}>
        <View style={styles.textInput_label_container}><Text style={styles.textInput_labelText}>Email</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        </View>
        
        <View style={styles.texhtInpu_container}>
        <View style={styles.textInput_label_container}><Text style={styles.textInput_labelText}>Password</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        </View>
        
        
      
      <Primary_button text='Sign In'/>
      <Text style={styles.or}>Or</Text>
      
      <View style={styles.social_login_container}>
      <Social_Media_Login text='Continue with Google' mediaType='google' onPress={()=> console.log('google pressed')}/>
      <Social_Media_Login text='Continue with Apple' mediaType='apple' onPress={()=> console.log('google pressed')}/>
      </View>
      
      </SignUpContainer_elevated> 


      
      
      
      
        
        
        
        
      
      
      </>
    );
  
  
}

export default LoginScreen

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
        backgroundColor: 'white',

      },
      title_container:{paddingBottom:'5%', justifyContent:'flex-start', width:'100%', marginLeft: '5%'},

      title_text: {
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
      login_btn_touchableOpacity:{width:'100%', alignItems:'center'},
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
        social_login_container:{
          width:'100%', 
          height:120, 
          justifyContent:'space-between',
          paddingLeft:10,
          paddingRight:10
        },
        texhtInpu_container:{width:'100%', alignItems:'center'},
        textInput_label_container:{width:'100%',alignItems:'flex-start', paddingLeft:'12%'},
        textInput_labelText:{fontWeight:'bold'}

        
        
      
      
      
      
});