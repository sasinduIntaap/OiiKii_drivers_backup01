import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image,SafeAreaView } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import PhoneIcon from '../../assets/svg_icons/phoneIcon.svg';
import MailIcon from '../../assets/svg_icons/mailIcon.svg';
import Otpillustration from '../../assets/svg_icons/OTPillustartion.svg';
import OtpInput from '../OtpInput';
import SignUpContainer_elevated from './SignUpContainer_elevated';


const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const VerifyAccount = ({text,onPress}) => {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  
  const phoneInput = useRef(null);
  return (
    
      <>
      {/* box shadow, elevated container begins */}
      <SignUpContainer_elevated top='10%' padding={20} illustration='otp' bottom='70%'>
      <View style={styles.title_container}>
      <Text style={styles.title}>Verify your Account</Text>
      </View>
      <View style={styles.middleBody_container}>
        <Text style={styles.info_text}>We've sent an OTP to</Text>
        <Text style={styles.contact_txt}>+44****000</Text>
      </View>
      <View style={styles.OtpInput_container}>
        <OtpInput />
      </View>
      <Primary_button text={text} onPress={onPress}/>
      
      </SignUpContainer_elevated> 
      {/* box shadow, elevated container ends */}
      
        </>
        
        
        
      
      
      
  )
}

export default VerifyAccount

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // height:'100%'
        
        
        

        
      },
      OtpInput_container:{marginTop:20},
      info_text:{fontWeight:'400', fontSize:16},
      contact_txt:{fontWeight:'400', fontSize:16, color:'#F66F6F'},
      boxShadow: {
        padding:20,
        elevation: 20,
        borderRadius: 11,
        // maxHeight: 700,
        width:'80%',
        // marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        

      },

      title: {
        fontSize: 20,
        fontWeight: 'bold',
        
      },
      title_container:{
        paddingBottom:'5%',
         justifyContent:'flex-start',
          width:'100%',
           marginLeft: '5%'
          },
          middleBody_container:{
            alignItems:'center',
             marginTop:10,
              marginBottom:10
            }
});