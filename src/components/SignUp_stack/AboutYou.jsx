import { StyleSheet, Text, View,TextInput, TouchableOpacity,Alert,ImageBackground,Dimensions,Image,SafeAreaView, Modal, FlatList,ScrollView } from 'react-native'
import React,{ useState,useRef,useEffect } from 'react'
import Primary_button from '../Primary_button';
import SignUpMainContainer from './SignUpMainContainer';
import CustomTextInput from '../CustomTextInput';
import CountryPicker from 'react-native-country-picker-modal';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



const AboutYou = ({text,onPress}) => {
    const [countryModalOpen,setCountryModalOpen] = useState(false);
    const [countryCode, setCountryCode] = useState('BR');
    const [country, setCountry] = useState(null);
    const [languagePickerVisible,setLanguagePickerVisible] = useState(false);
    const [date,setDate] = useState(new Date());
    const [day,setDay] = useState('');
    const [month,setMonth] = useState('');
    const [year,setYear] = useState('');
    const [gender,setGender] = useState('');
    const [language,setLanguage] = useState('');

    //on date change function

    const onDateChange = (event, selectedDate) => {
      setDay(selectedDate.getUTCDate());
      if(selectedDate.getUTCMonth() == 0){
          setMonth('January');
      }else if(selectedDate.getUTCMonth() == 1){
        setMonth('February');
      }else if(selectedDate.getUTCMonth() == 2){
        setMonth('March');
      }else if(selectedDate.getUTCMonth() == 3){
        setMonth('April');
      }else if(selectedDate.getUTCMonth() == 4){
        setMonth('May');
      }else if(selectedDate.getUTCMonth() == 5){
        setMonth('June');
      }else if(selectedDate.getUTCMonth() == 6){
        setMonth('July');
      }else if(selectedDate.getUTCMonth() == 7){
        setMonth('August');
      }else if(selectedDate.getUTCMonth() == 8){
        setMonth('September');
      }else if(selectedDate.getUTCMonth() == 9){
        setMonth('October');
      }else if(selectedDate.getUTCMonth() == 10){
        setMonth('November');
      }else if(selectedDate.getUTCMonth() == 11){
        setMonth('December');
      }

      setYear(''+selectedDate.getUTCFullYear());
      setDate(selectedDate);
    };

    //date picker show function 
    const datePickerShow = () => {
      DateTimePickerAndroid.open({
        value: date,
        onChange:onDateChange,
        mode: 'date',
        is24Hour: true,
        
      });
    };

    //set language function
    const setLang = (lang) =>{
      setLanguage(lang);
      setLanguagePickerVisible(false);
    }
    // Language picker Data

    const LanguageData = [
        {
          title: "English",
          
        
          language: "en",
        },
        {
          title: "Italian",
        
        },
        {
          title: "German",
        
        },
        {
          title: "Turkish",
        
          language: "tr-TR",
        },
        {
          title: "Swedish",
        
        },
        {
          title: "Japanese",
        
        },
      ];


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
      <TouchableOpacity style={styles.date_touchableOpacity} onPress={datePickerShow}>
        <Text>{day == '' ? 'Date' : day}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity} onPress={datePickerShow}>
        <Text>{month == '' ? 'Month' : month}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date_touchableOpacity} onPress={datePickerShow}>
        <Text>{year == '' ? 'Year' : year}</Text>
      </TouchableOpacity>
      </View>
      </View>
      {/* gender */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Gender</Text></View>
      <View style={styles.dateBtn_container}>
      <TouchableOpacity onPress={() => setGender('male')} style={[styles.gender_touchableOpacity,{borderWidth: gender == 'male' ? 1 : 0.8, borderColor: gender == 'male' ? '#F66F6F' : '#9D9D9D'}]}>
        <Text style={{color: gender == 'male' ? '#F66F6F' : 'black'}}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setGender('female')} style={[styles.gender_touchableOpacity,{borderWidth: gender == 'female' ? 1 : 0.8, borderColor: gender == 'female' ? '#F66F6F' : '#9D9D9D'}]}>
        <Text style={{color: gender == 'female' ? '#F66F6F' : 'black'}}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setGender('prefernot')} style={[styles.gender_touchableOpacity,{borderWidth: gender == 'prefernot' ? 1 : 0.8, borderColor: gender == 'prefernot' ? '#F66F6F' : '#9D9D9D'}]}>
        <Text style={{color: gender == 'prefernot' ? '#F66F6F' : 'black'}}>Prefer not to say</Text>
      </TouchableOpacity>
      </View>
      </View>
        {/* nationality */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Nationality</Text></View>
      <TouchableOpacity style={{width:'100%'}} onPress={()=> setCountryModalOpen(true)}>
      <CustomTextInput placeholder={country == null ? 'Select your country' : country} editable={false} icon = 'dropDown'/>
      </TouchableOpacity>
      </View>
      {/* language */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Preffered Language</Text></View>
      <TouchableOpacity style={{width:'100%'}} onPress={()=> setLanguagePickerVisible(true)}>
      <CustomTextInput placeholder={language == '' ? 'Select Your Language' : language} editable={false} icon = 'dropDown'/>
      </TouchableOpacity>
      </View>
      {/* address */}
      <View style={{width:'100%', alignItems:'center'}}>
      <View style={{width:'100%',alignItems:'flex-start'}}><Text style={{fontWeight:'bold'}}>Current Address</Text></View>
      <CustomTextInput placeholder='Current Address'/>
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
          onSelect={(country) => setCountry(country.name)}
          

          />
          <Modal visible={languagePickerVisible}>
            
            <TouchableOpacity onPress={()=>setLanguagePickerVisible(false)}>
                <Text>Close</Text>
            </TouchableOpacity>
            <View>
            <FlatList 
                data={LanguageData}
                renderItem={(item) => <TouchableOpacity onPress={() => setLang(item.item.title)} style={styles.language_container}><Text style={{color:'black', fontSize:20}}>{item.item.title}</Text></TouchableOpacity>}
                keyExtractor={(item)=>item.title}

            />
            </View>
            
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
    gender_touchableOpacity:{
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
        },
        language_container:{
            
            padding:10,
            alignItems:'center'
        }
})