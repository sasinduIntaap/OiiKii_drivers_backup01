import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import Buildings from '../../assets/svg_icons/building.svg';
import Otpillustration from '../../assets/svg_icons/OTPillustartion.svg';
import ProfilepicIllustration from '../../assets/svg_icons/ProfilepicIllustration.svg';
import LoginIllustration from '../../assets/svg_icons/Loginillustration.svg';

const SignUpMainContainer = ({children,illustration}) => {
   
    if(illustration == 'buildings'){
        return(
            <>
    <SafeAreaView style={styles.container}> 
        <View>
            <Buildings />
        </View>
        
        <View style={styles.bodyContainer}>
        {children}
        </View>
        
    </SafeAreaView>
      
    
    
    </>
        )
    }else if(illustration == 'otp'){
        return(
            <>
    <SafeAreaView style={styles.container}> 
        <View>
        <Otpillustration />
        </View>
        
        <View style={styles.bodyContainer}>
        {children}
        </View>
        
    </SafeAreaView>
      
    
    
    </>
        )
    }else if(illustration == 'pic'){
        return(
            <>
    <SafeAreaView style={styles.container}> 
        <View>
        <ProfilepicIllustration />
        </View>
        
        <View style={styles.bodyContainer}>
        {children}
        </View>
        
    </SafeAreaView>
      
    
    
    </>
        )
    }else if(illustration == 'login'){
        return(
            <>
    <SafeAreaView style={styles.container}> 
        <View>
        <LoginIllustration />
        </View>
        
        <View style={styles.bodyContainer}>
        {children}
        </View>
        
    </SafeAreaView>
      
    
    
    </>
        )
    }
    
}

export default SignUpMainContainer

const styles = StyleSheet.create({
    container: {
        flex:10,
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