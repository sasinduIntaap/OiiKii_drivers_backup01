import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Logo from '../assets/svg_icons/AppLogo.svg';
import BuildingWithDriver from '../assets/svg_icons/BuildingWithDriver.svg';
import {useNavigation} from '@react-navigation/native';
import Primary_button from '../components/Primary_button';



const WelcomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo
        style={styles.logo}
        width={151.72}
        height={52}
      />
      <View style={styles.banner_container}>
      <BuildingWithDriver/>
      </View>
      <View style={styles.bottomContent_container}>
      <Primary_button text='Sign Up' onPress={() => navigation.navigate('Register')}/>
      <View style={styles.devider_container}>
        <View style={styles.devider}></View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.devider}></View>
      </View>
      
        <View style={styles.loginText_container}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Log In</Text>
        <Text style={styles.normalText}> to the existing account</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  logo: {
    position: 'absolute',
    top: 118,
  },
  loginButton: {
    position: 'absolute',
    bottom: 190,
    padding: 10,
    left: 184,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontFamily:'Roboto',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18.75,
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
    width:'100%', alignItems:'center', justifyContent:'space-evenly', top:60,height:200
  },
  banner_container:{
    top:20
  }, 
  or:{
    paddingLeft: 10,
     paddingRight:10
    }
});

export default WelcomeScreen;
