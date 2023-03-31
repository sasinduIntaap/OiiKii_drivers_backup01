import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Progress_Bar = () => {
  return (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <View style={{borderRadius:100, padding:7, backgroundColor:'#D9D9D9'}}></View>
      <View style={{width:80, padding:0, height:5,backgroundColor:'#D9D9D9'}}></View>
      <View style={{borderRadius:100, padding:7,backgroundColor:'#D9D9D9'}}></View>
      <View style={{width:80,padding:0, height:5,backgroundColor:'#D9D9D9'}}></View>
      <View style={{borderRadius:100, padding:7,backgroundColor:'#D9D9D9'}}></View>
      
    </View>
  )
}

export default Progress_Bar

const styles = StyleSheet.create({})