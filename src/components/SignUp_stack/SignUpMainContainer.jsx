import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import Buildings from '../../assets/svg_icons/building.svg';

const SignUpMainContainer = ({children}) => {
    
  return (
    <>
    <SafeAreaView style={styles.container}> 
        <View>
            <Buildings/>
        </View>
        
        <View style={styles.bodyContainer}>
        {children}
        </View>
        
    </SafeAreaView>
      
    
    
    </>
  )
}

export default SignUpMainContainer

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
        },
    bodyContainer:{
        position:'absolute',
        alignSelf:'center',
        width:'80%',
        height:'100%'
        
    }
})