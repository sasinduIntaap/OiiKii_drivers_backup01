import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import GoogleLogo from '../assets/images/Google__G__Logo 1.svg';
import React from 'react'

const Google_Login_Button = ({text,style}) => {
  return (
    <TouchableOpacity style={[styles.googleButton,style]}>
      
        <GoogleLogo/>
        <Text style={styles.googleButtonText}>{text}</Text>
      </TouchableOpacity>
  )
}

export default Google_Login_Button

const styles = StyleSheet.create({
    googleButton: {
            flexDirection: 'row',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            borderColor:'#9D9D9D',
            width: '100%',
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            // margin:'10%'
            // marginBottom: 10,
            },
            googleButtonText: {
            color: '#000000',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 10,
            }

})