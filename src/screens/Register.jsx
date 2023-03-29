import React, { useState,useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';
import OiiKii_Logo from '../components/OiiKii_Logo';
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import TandC_comp from '../components/TandC_comp';
import Checkbox from 'expo-checkbox';
import Buildings from '../assets/building.svg';
import PhoneIcon from '../assets/phoneIcon.svg';
import MailIcon from '../assets/mailIcon.svg';





const Register = () => {
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
    //////////////////////////////////////////////////////////////sign up stage 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
      <Text style={styles.title}>Create New Account</Text>
      </View>
        <View style={{width:'100%', alignItems:'center'}}>
        <View style={{width:'100%',alignItems:'flex-start', paddingLeft:'12%', paddingBottom:'2%'}}><Text style={{fontWeight:'bold'}}>Phone number</Text></View>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="GB"
          layout="first"
          withShadow
          autoFocus
          containerStyle={styles.phoneNumberView}
          textContainerStyle={{ paddingVertical: 0 }}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
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
        <View style={{width:'100%', alignItems:'center'}}>
        <View style={{width:'100%',alignItems:'flex-start', paddingLeft:'12%'}}><Text style={{fontWeight:'bold'}}>Confirm Password</Text></View>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        </View>
        <View style={styles.checkBoxView}>
          <Checkbox style={styles.checkBox} value={termsChecked} onValueChange={()=>setTermsChecked(!termsChecked)} color='#F66F6F' />
          <View>
          <Text style={styles.checkBoxText}>by signing up you accept the<Text style={{color:'#F66F6F'}}> Terms &</Text></Text>
          <Text style={{color:'#F66F6F'}}>Conditions</Text>
          </View>
        
        
      </View>
        
        <LinearGradient style={styles.signup_button} colors={['#F66F6F', '#DB0DC1']}>
          <TouchableOpacity style={{width:'100%', alignItems:'center'}} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </LinearGradient>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <Buildings />
      </View>
        
        
        
        
      </View>
      
      </>
    );
  }else if(signUp_stage == 1){
    //////////////////////////////////////////////////////////////sign up stage 2 begins\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    return (
      <>
      {/* /////////////////////////////////////////////////////////////OiiKii logo begins\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* <View style={styles.logo}> */}
      
      {/* <OiiKii_Logo /> */}
      
      {/* </View> */}
      {/* /////////////////////////////////////////////////////////////OiiKii Ends\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      
      {/* /////////////////////////////////////////////////////////////main container begins\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <View style={styles.container}>
      {/* /////////////////////////////////////////////////////////////Elevated container\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <View style={styles.boxShadow}>
      <View style={{paddingBottom:'5%', justifyContent:'flex-start', width:'100%', marginLeft: '5%'}}>
      <Text style={styles.title}>Select your prefered verifying method</Text>
      </View>
      {/* /////////////////////////////////////////////////////////////Verifying method Selection\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <View style={{marginBottom:'10%'}}>
        <TouchableOpacity style={{width:156,height:138, borderWidth:1, borderColor:'black', borderRadius:10, marginBottom:'5%'}}>
          <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
          <PhoneIcon />
          <Text>By Mobile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:156,height:138, borderWidth:1, borderColor:'black', borderRadius:10}}>
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
        <MailIcon />
        <Text>By Email</Text>
        </View>
        </TouchableOpacity>
      </View>
      {/* /////////////////////////////////////////////////////////////Verifying method Selection\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <LinearGradient style={styles.signup_button} colors={['#F66F6F', '#DB0DC1']}>
          <TouchableOpacity style={{width:'100%', alignItems:'center'}} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </LinearGradient>
      
      </View> 
      {/* /////////////////////////////////////////////////////////////Elevated container\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      {/* /////////////////////////////////////////////////////////////Buildings image\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <View>
      <Buildings />
      </View>
      {/* /////////////////////////////////////////////////////////////Buildings image\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        
        
        
      </View>
      {/* /////////////////////////////////////////////////////////////main container ends\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      
      </>
    );
    //////////////////////////////////////////////////////////////sign up stage 2 ends\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  }else if(signUp_stage == 2){
    //////////////////////////////////////////////////////////////sign up stage 3 begins\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
      <Text style={styles.title}>Verify your Account</Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'400', fontSize:16}}>We've sent an OTP to</Text>
        <Text style={{fontWeight:'400', fontSize:16, color:'#F66F6F'}}>+44****000</Text>
      </View>
      <LinearGradient style={styles.signup_button} colors={['#F66F6F', '#DB0DC1']}>
          <TouchableOpacity style={{width:'100%', alignItems:'center'}} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </LinearGradient>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <Buildings />
      </View>
        
        
        
        
      </View>
      
      </>
    );
//////////////////////////////////////////////////////////////sign up stage 3 ends\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  }else if(signUp_stage == 3){
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
      <Text style={styles.title}>Stage four</Text>
      </View>
      <LinearGradient style={styles.signup_button} colors={['#F66F6F', '#DB0DC1']}>
          <TouchableOpacity style={{width:'100%', alignItems:'center'}} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </LinearGradient>
      
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
      }
      
      
      
      
})