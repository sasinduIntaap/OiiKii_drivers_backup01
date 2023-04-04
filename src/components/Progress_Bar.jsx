import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Progress_Bar = ({progress}) => {
    console.log('progress is' + progress);
  return (
    <View>
    <View style={styles.container}>
      {progress == 10 ? <LinearGradient style={styles.gradient_circle} colors={['#F66F6F', '#DB0DC1']}></LinearGradient> : <View style={styles.circle}></View>}
      <View style={styles.bar}>
      {progress == 10 ? <LinearGradient style={styles.gradient_mini_bar} colors={['#F66F6F', '#DB0DC1']}></LinearGradient> : <View style={styles.mini_bar}></View>}
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
      </View>
      <View style={styles.circle}></View>
      <View style={styles.bar}>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
            <View style={styles.mini_bar}></View>
      </View>
      <View style={styles.circle}></View>
      
    </View>
    <View style={{alignItems:'center'}}><Text style={{color:'#EB4890'}}>{progress == 10 ? 'Personal Details' : '' }</Text></View>
    </View>
  )
}

export default Progress_Bar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    circle:{
         borderRadius:100,
         padding:7,
         backgroundColor:'#D9D9D9'
        },
    gradient_circle:{
            borderRadius:100,
            padding:7,
            
           },
    bar:{
        width:80,
         padding:0,
          height:5,
          backgroundColor:'#D9D9D9',
          flexDirection:'row'
        },
    mini_bar:{
        width:16,
        padding:0,
        height:5,
        backgroundColor:'#D9D9D9'
        },
    gradient_mini_bar:{
            width:16,
            padding:0,
            height:5,
            // backgroundColor:'#D9D9D9'
            },
    
})