import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image,SafeAreaView, Modal } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import PhotoUpload from '../PhotoUpload';
import SignUpContainer_elevated from './SignUpContainer_elevated';
import SignUpMainContainer from './SignUpMainContainer';
import CustomTextInput from '../CustomTextInput';
import CountryPicker from 'react-native-country-picker-modal';
import { DarkTheme } from '@react-navigation/native';



const AboutYou = ({text,onPress}) => {
    const [countryModalOpen,setCountryModalOpen] = useState(false);
    const [countryCode, setCountryCode] = useState('BR');
    const [country, setCountry] = useState(null);
    const [languagePickerVisible,setLanguagePickerVisible] = useState(false);
    return (
        <>
          
          
          <SignUpMainContainer top='3%' padding={20}>
          <View style={styles.title_container}>
          <Text style={styles.title}>About You!</Text>
          </View>
          
          <View style={styles.middleBody_container}>
          {/*first name  */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>First Name</Text></View>
      <CustomTextInput placeholder='First Name'/>
      </View>
      {/* last name */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Last Name</Text></View>
      <CustomTextInput placeholder='Last Name'/>
      </View>
      {/* date of birth */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Date of Birth</Text></View>
      <View style={styles.dateBtn_container}>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Date</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Year</Text>
      </TouchableOpacity>
      </View>
      </View>
      {/* gender */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Gender</Text></View>
      <View style={styles.dateBtn_container}>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity}>
        <Text>Prefer not to say</Text>
      </TouchableOpacity>
      </View>
      </View>
        {/* nationality */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Nationality</Text></View>
      <TouchableOpacity style={{width:'100%'}} onPress={()=> setCountryModalOpen(true)}>
      <CustomTextInput placeholder='Select your country' editable={false} icon = 'dropDown'/>
      </TouchableOpacity>
      </View>
      {/* language */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Preffered Language</Text></View>
      <TouchableOpacity style={{width:'100%'}} onPress={()=> setLanguagePickerVisible(true)}>
      <CustomTextInput placeholder='Select languages' editable={false} icon = 'dropDown'/>
      </TouchableOpacity>
      </View>
      
      </View>
          
          <View style={{alignItems:'center'}}>
            <Primary_button text={text} onPress={onPress}/>

          </View>
          <CountryPicker 
          visible={countryModalOpen}
          onClose={()=> setCountryModalOpen(false)}
          modalProps={countryModalOpen}
          containerButtonStyle={{display:'none'}}
          onSelect={(country) => setCountry(country)}
          

          />
          <Modal visible={languagePickerVisible}>
            <View><Text>Language Picker is here</Text></View>
            <TouchableOpacity onPress={()=>setLanguagePickerVisible(false)}>
                <Text>Close</Text>
            </TouchableOpacity>
          </Modal>
          </SignUpMainContainer> 
          
          
            
            </>
            
            
          
          
          
      );
}

export default AboutYou

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        },
      boxShadow: {
        padding:20,
        elevation: 20,
        borderRadius: 11,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        // marginTop:{windowHeight <= 831 ?70}
        },
    
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        
      },
      title_container:{
        paddingBottom:'5%',
         justifyContent:'flex-start',
          width:'100%',
        //    marginLeft: '5%'
      },
      label_container:{
        // paddingBottom:'5%',
         justifyContent:'flex-start',
          width:'100%',
           marginLeft: '5%'
      },
    middleBody_container:{
            
             marginTop:10,
              marginBottom:10
            },
    date_touchableOpacity:{
        borderWidth:0.8,
         borderColor:'#9D9D9D',
          padding:10,
           borderRadius:7,

        },
    dateBtn_container:{
        flexDirection:'row',
         justifyContent:'space-between',
          width:'100%',
          paddingBottom:'5%'
        }
})