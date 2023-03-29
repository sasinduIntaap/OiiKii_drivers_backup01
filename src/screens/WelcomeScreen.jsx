import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Logo from '../assets/images/AppLogo.svg';
import { LinearGradient } from 'expo-linear-gradient';
import BuildingWithDriver from '../assets/images/BuildingWithDriver.svg';
import Routes from '../constants/Routes';
import {useNavigation} from '@react-navigation/native';


const WelcomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Logo
        style={styles.logo}
        width={151.72}
        height={52}
      />
      <BuildingWithDriver/>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Register')}>
        <LinearGradient
          colors={['rgba(246, 111, 111, 1)', 'rgba(219, 13, 193, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row', alignItems:'center'}} bottom={-110}>
        <View style={{borderColor:'black', width:115, borderWidth:0.5}}></View>
        <Text style={{paddingLeft: 10, paddingRight:10}}>Or</Text>
        <View style={{borderColor:'black', width:115, borderWidth:0.5}}></View>
      </View>
      <Text style={styles.loginText}>
        <Text style={{color: 'rgba(239, 86, 132, 1)'}} onPress={() => navigation.navigate('Login')}>Log In</Text>
        <Text style={{color: 'rgba(129, 129, 129, 1)'}}> to the existing account</Text>
      </Text>
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
});

export default WelcomeScreen;
