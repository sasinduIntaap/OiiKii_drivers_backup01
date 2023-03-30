import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import PhoneIcon from '../../assets/svg_icons/phoneIcon.svg';
import MailIcon from '../../assets/svg_icons/mailIcon.svg';
import Buildings from '../../assets/svg_icons/building.svg';

const {height, width} = Dimensions.get('window');
const bk_image = {uri :'http://www.w3.org/2000/svg'};

const VerifyMethod = ({onPress}) => {
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
    
    <View style={styles.boxShadow}>
    <View style={{paddingBottom:'5%', justifyContent:'flex-start', width:'100%', marginLeft: '5%'}}>
    <Text style={styles.title}>Select your prefered verifying method</Text>
    </View>
    
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
    
    <Primary_button text='Next' onPress={onPress}/>
    
    </View> 
    

    
    <View style={{height:'100%', marginBottom:'20%'}}>
    {/* the buildings image */}
    <Buildings />
    </View>
    
      
      
      
    </View>
    
    
    </>
  )
}

export default VerifyMethod

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