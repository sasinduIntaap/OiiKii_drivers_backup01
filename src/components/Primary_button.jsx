import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Primary_button = ({text,onPress}) => {
  return (
    <LinearGradient style={styles.button_gradient} colors={['#F66F6F', '#DB0DC1']}>
    <TouchableOpacity style={styles.button_touchableOpacity} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
</LinearGradient>
  )
}

export default Primary_button

const styles = StyleSheet.create({

    button_gradient: {
        width:'90%',
         height:50,
          justifyContent:'center',
           borderRadius:12,
           marginTop: '5%'
      },
      button_touchableOpacity:{width:'100%', alignItems:'center'},
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:'bold'
      }
})