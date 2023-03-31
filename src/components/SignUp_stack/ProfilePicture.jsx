import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image,SafeAreaView } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import ProfilepicIllustration from '../../assets/svg_icons/ProfilepicIllustration.svg';
import PhotoUpload from '../PhotoUpload';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfilePicture = ({text,onPress}) => {

  useEffect(()=>{
    console.log('width '+windowWidth);
    console.log('height '+windowHeight);
  });

  return (
    
      <View style={styles.container}>
      {/* box shadow, elevated container begins */}
      <View style={[styles.boxShadow,{marginTop:windowHeight >= 831 ? 70 : 0 || windowHeight >= 780 ? 150 : 0}]}>
      <View style={styles.title_container}>
      <Text style={styles.title}>Set up your profile Picture!</Text>
      </View>
      <View style={styles.label_container}>
          <Text>Profile Picture</Text>
      </View>
      <View style={styles.middleBody_container}>
      <PhotoUpload   discription='Click here to add your profile picture'/>
        
      </View>
      
      <Primary_button text={text} onPress={onPress}/>
      
      </View> 
      {/* box shadow, elevated container ends */}
      <View>
      {/* the buildings image */}
      <ProfilepicIllustration />
      </View>
        
        
        
        
      </View>
      
      
  );
  
}

export default ProfilePicture

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    },
  boxShadow: {
    padding:20,
    elevation: 20,
    borderRadius: 11,
    width:'80%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    // marginTop:{windowHeight <= 831 ?70}
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
  label_container:{
    // paddingBottom:'5%',
     justifyContent:'flex-start',
      width:'100%',
       marginLeft: '5%'
  },
middleBody_container:{
        
         marginTop:10,
          marginBottom:10
        }
});