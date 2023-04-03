import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpMainContainer from './SignUpMainContainer'
const SignUpContainer_elevated = ({children,height,top,padding,margin,marginTop,marginBottom,illustration, bottom}) => {
  return (
    <SignUpMainContainer illustration={illustration}>
      <View style={[{height:height, top:top, padding:padding, margin:margin, marginTop:marginTop, marginBottom:marginBottom, bottom:bottom},styles.container]}>
            {children}
      </View>
    </SignUpMainContainer>
  )
}

export default SignUpContainer_elevated

const styles = StyleSheet.create({
    container:{
        // bottom:'70%',
        // top:'5%',
        
        elevation: 20,
        borderRadius: 11,
        maxHeight: 700,
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        
        
    }
})