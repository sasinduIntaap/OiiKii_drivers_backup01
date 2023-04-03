import React,{useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Logo from '../assets/svg_icons/AppLogo.svg';
import BuildingWithDriver from '../assets/svg_icons/BuildingWithDriver.svg';
import {useNavigation} from '@react-navigation/native';
import Primary_button from '../components/Primary_button';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeScreen = (props) => {
  useEffect(()=>{
    console.log('width '+ windowWidth);
    console.log('height '+ windowHeight);
  },[]);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <Logo
        style={[styles.logo,{top: windowHeight < 534 ? '5%' : 0, marginBottom: windowHeight > 866 ? '20%' : 0}]}
         
        
      />
      <BuildingWithDriver />
      <Primary_button text='Sign Up' onPress={() => navigation.navigate('Register')}/>
      <View style={[styles.devider_container,{marginTop: windowHeight > 866 ? 10 : 0, marginBottom: windowHeight > 866 ? 10 : 0}]}>
        <View style={styles.devider}></View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.devider}></View>
      </View>
      <View style={styles.loginText_container}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Log In</Text>
        <Text style={styles.normalText}> to the existing account</Text>
        </View>
      
      {/* <View style={[styles.banner_container,{bottom: windowHeight < 534 ? '10%' : 0, alignItems:'center'}]}>
      
        
        
      </View> */}
      {/* <View style={{width:'100%', alignItems:'center', marginBottom:20}}>
        
      </View> */}
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
      
  },
  logo: {
    // position: 'absolute',
    // top: '%',
  },
  
  gradient: {
    position: 'absolute',
    width: 290,
    height: 40,
    left: -112,
    bottom: 0,
    borderRadius: 12,
  },
  loginText: {
    bottom: -130,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
  devider_container:{
    flexDirection:'row',
     alignItems:'center'
    },
  devider:{
    borderColor:'black', width:115, borderWidth:0.5
  },
  loginText:{
    color: 'rgba(239, 86, 132, 1)'
  },
  normalText:{
    color: 'rgba(129, 129, 129, 1)'
  },
  loginText_container:{
    flexDirection:'row'
  },
  bottomContent_container:{
    width:'100%', alignItems:'center', justifyContent:'space-evenly'
  },
  banner_container:{
    // top:20,
    padding:0
  }, 
  or:{
    paddingLeft: 10,
     paddingRight:10
    }
});

export default WelcomeScreen;