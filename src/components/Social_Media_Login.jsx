import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import AppleLogo from '../assets/svg_icons/Apple_logo_black1.svg';
import GoogleLogo from '../assets/svg_icons/google_logo_colorful.svg';

const Social_Media_Login = ({text,onPress,mediaType}) => {
  return (
    <TouchableOpacity style={styles.googleButton} onPress={onPress}>
      
        {mediaType == 'google' ? <GoogleLogo/> :<View></View> || mediaType == 'apple' ? <AppleLogo /> : <View></View>}
        <Text style={styles.googleButtonText}>{text}</Text>
      </TouchableOpacity>
  )
}

export default Social_Media_Login

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
        
        },
        googleButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        }

})