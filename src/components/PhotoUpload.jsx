import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import Camera_icon from '../assets/svg_icons/camera_icon.svg';

const PhotoUpload = ({width, onPress,title,discription,height}) => {
  return (
    <TouchableOpacity style={[styles.container,{width:width,height:height}]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Camera_icon />
      <View style={{width:250, alignItems:'center', marginTop:10}}>
      <Text>{discription}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PhotoUpload

const styles = StyleSheet.create({

    container:{
        borderWidth:1,
        borderColor:'black',
        alignItems:'center',
        borderRadius:7,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:80,
        paddingBottom:80

        

    },
    desc_container:{
        flexDirection:'row',
        alignItems:'flex-start'

         
        
        

        
    },
    title:{
        margin:10
    }
})