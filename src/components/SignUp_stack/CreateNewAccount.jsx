import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import Checkbox from 'expo-checkbox';
import Social_Media_Login from '../Social_Media_Login';
import Primary_button from '../Primary_button';
import SignUpContainer_elevated from './SignUpContainer_elevated';


const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const CreateNewAccount = ({onPress}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState('');
  const [signUp_stage, setSignUp_stage] = useState(0);
  const phoneInput = useRef(null);

  return (
    <>
    
    
    
    
    
    {/* box shadow, elevated container begins */}
    <SignUpContainer_elevated top='5%' illustration='buildings' bottom='70%'>
    <View style={{justifyContent:'flex-start', width:'100%', marginLeft: '5%', flexDirection:'row', marginTop:5, marginBottom:20 }}>
    <Text style={styles.title}>Create New Account</Text>
    </View>
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start', paddingLeft:'12%'}}><Text style={{fontWeight:'bold'}}>Phone number</Text></View>
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
      
    <Primary_button text='Sign Up' onPress={onPress}/>

    
    <View style={{width:'100%'}}>
    <View style={{margin:10}}><Social_Media_Login text='Sign up with Google' onPress={()=> console.log('google pressed')} mediaType='google'/></View>
    <View style={{margin:10}}><Social_Media_Login text='Sign up with Apple' onPress={()=> console.log('apple pressed')} mediaType='apple'/></View>
    </View>
    
    
    </SignUpContainer_elevated> 
    {/* box shadow, elevated container ends */}
    
      
      
      
      
    
    {/* the buildings image */}
    
    
    
    </>
  );
}

export default CreateNewAccount

const styles = StyleSheet.create({

  
    

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

// sign up page responsiveness, 
//background image container of all pages
//implement one main container with box-shadow