import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image,SafeAreaView } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import Otpillustration from '../../assets/svg_icons/OTPillustartion.svg';


const ProfilePicture = ({text,onPress}) => {
  return (
    
      <View style={styles.container}>
      {/* box shadow, elevated container begins */}
      <View style={styles.boxShadow}>
      <View style={styles.title_container}>
      <Text style={styles.title}>Verify your Account</Text>
      </View>
      <View style={styles.middleBody_container}>
        
      </View>
      
      <Primary_button text={text} onPress={onPress}/>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <Otpillustration />
      </View>
        
        
        
        
      </View>
      
      
  )
}

export default ProfilePicture

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // height:'100%'
    
    
    

    
  },
  
  
  
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