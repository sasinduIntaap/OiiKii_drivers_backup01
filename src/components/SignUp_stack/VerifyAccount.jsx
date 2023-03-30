import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import PhoneIcon from '../../assets/svg_icons/phoneIcon.svg';
import MailIcon from '../../assets/svg_icons/mailIcon.svg';
import Buildings from '../../assets/svg_icons/building.svg';

const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const VerifyAccount = ({text,onPress}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState('');
  const [signUp_stage, setSignUp_stage] = useState(0);
  const phoneInput = useRef(null);
  return (
    <>
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
      <Primary_button text={text} onPress={onPress}/>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <Buildings />
      </View>
        
        
        
        
      </View>
      
      </>
  )
}

export default VerifyAccount

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
});