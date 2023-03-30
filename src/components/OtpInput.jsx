import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useRef} from 'react'

const OtpInput = () => {
    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const thirdInput = useRef(null);
    const fourthInput = useRef(null);
  return (
    <View style={{alignItems:'center'}}>
    <View>
    <Text style={{fontWeight:'600'}}>Please enter the OTP you recieved</Text>
    </View>
    <View style={styles.input_container}>
      <TextInput style={styles.input} keyboardType='number-pad' maxLength={1} onChangeText={text =>{
        text && secondInput.current.focus();
      }}
        ref={firstInput}
      />
      <TextInput style={styles.input}
          keyboardType='number-pad' maxLength={1} onChangeText={text =>{
        text && thirdInput.current.focus();
      }}

        ref={secondInput}

      />
      <TextInput style={styles.input}
          keyboardType='number-pad' maxLength={1} onChangeText={text =>{
        text && fourthInput.current.focus();
      }}

        ref={thirdInput}

      />
      <TextInput style={styles.input}
          keyboardType='number-pad' maxLength={1}

        ref={fourthInput}

      />
    </View>
    <View>
        <Text style={{color:'#818181', fontSize:12}}>Haven't recieved OTP yet? <Text style={{color:'#F66F6F'}}>resend</Text></Text>
    </View>
    </View>
  )
}

export default OtpInput

const styles = StyleSheet.create({
    input_container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:5
    },
    input:{
        borderWidth:1,
        borderColor:'#9D9D9D',
        margin:5,
        padding:5,
        borderRadius:7, 
        height: 35,
        width:35,
    }
    
})