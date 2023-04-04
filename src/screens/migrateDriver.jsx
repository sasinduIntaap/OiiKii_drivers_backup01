import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Dimensions  ,ScrollView} from 'react-native';
import ScanCamLogo from '../assets/svg_icons/camera_icon.svg'

export default function MigrateDriverVerifyScreen() {
  const [utrNumber, setUtrNumber] = useState('');
  const [niNumber, setNiNumber] = useState('');
  const [dlFrontImage, setDrivingLicenseFront] = useState(null);
  const [dlBackImage, setDrivingLicenseBack] = useState(null);
  const [passportNumber, setPassportNumber] = useState('');
  const [passportImage, setPassportImage] = useState(null);
  const [visaImage, setVisaImage] = useState(null);
  const [addressProofImage, setAddressProofImage] = useState(null);
  const [crbImage, setCrbImage] = useState(null);

  const handleVerify = () => {
    // Handle verification logic here
  }

  const handleDlFrontImageUpload = () => {
    // Handle image upload logic here
  }

  const handleDlBackImageUpload = () => {
    // Handle image upload logic here
  }

  const handlePassportImageUpload = () => {
    // Handle image upload logic here
  }

  const handleVisaImageUpload = () => {
    // Handle image upload logic here
  }

  const handleAddressProofImageUpload = () => {
    // Handle image upload logic here
  }

  const handleCrbImageUpload = () => {
    // Handle image upload logic here
  }

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.rectangle}> 
            <Text style={styles.heading}>Submit your documents & details</Text>
            <View style={styles.inputContainer}>
                <Text>UTR Number</Text>        
                <TextInput style={styles.input} placeholder="Enter your UTR Number" value={utrNumber} onChangeText={setUtrNumber} />
                
                <Text>NI Number</Text>
                <TextInput style={styles.input} placeholder="Enter your NI number" value={niNumber} onChangeText={setNiNumber} />
                
                <Text>Driving License Number</Text>
                <TextInput style={styles.input} placeholder="Enter your driving license number" value={niNumber} onChangeText={setNiNumber} />
                

                <View style={styles.scanCont}>
                    <View style={{borderColor:'black', height:90, width:130, borderWidth:0.5, borderRadius:7.5}}>
                        <Text style={styles.scan}>Front</Text>
                        <ScanCamLogo style={styles.scanCamLogo}
                            width={130}
                            height={18}
                        />
                        <Text style={styles.scanText}>Click here to scan</Text>
                    </View>
                    <Text style={{paddingLeft: 9, paddingRight:9}}></Text>
                    <View style={{borderColor:'black', height:90, width:130, borderWidth:0.5, borderRadius:7.5}}>
                        <Text style={styles.scan}>Back</Text>
                        <ScanCamLogo style={styles.scanCamLogo}
                            width={130}
                            height={18}
                        />
                        <Text style={styles.scanText}>Click here to scan</Text>
                    </View>
                </View>

                <Text>Passport Number</Text>
                <TextInput style={styles.input} placeholder="Enter your driving license number" value={niNumber} onChangeText={setNiNumber} />
                
        
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleDlFrontImageUpload}>
            <Text style={styles.uploadText}>Front</Text>
            <Text style={styles.uploadText}>Click here to scan</Text>
          </TouchableOpacity>
          {dlFrontImage && <Image source={{ uri: dlFrontImage }} style={styles.image} />}
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleDlBackImageUpload}>
            <Text style={styles.uploadText}>Click here to scan back</Text>
          </TouchableOpacity>
          {dlBackImage && <Image source={{ uri: dlBackImage }} style={styles.image} />}
        </View>
        <TextInput style={styles.input} placeholder="Enter Passport Number" value={passportNumber} onChangeText={setPassportNumber} />
        <Text style={styles.imageText}>Attachment</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handlePassportImageUpload}>
            <Text style={styles.uploadText}>Attach Your Passport</Text>
          </TouchableOpacity>
          {passportImage && <Image source={{ uri: passportImage }} style={styles.image} />}
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleVisaImageUpload}>
            <Text style={styles.uploadText}>Attach Your Visa</Text>
          </TouchableOpacity>
          {visaImage && <Image source={{ uri: visaImage }} style={styles.image} />}
          </View>
        <View style={styles.imageContainer}>
        
        <TouchableOpacity style={styles.uploadButton} onPress={handleAddressProofImageUpload}>
            <Text style={styles.uploadText}>Attach Your Address Proof</Text>
        </TouchableOpacity>
        {addressProofImage && <Image source={{ uri: addressProofImage }} style={styles.image} />}
        </View>
        <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleCrbImageUpload}>
            <Text style={styles.uploadText}>Attach CRB if any (Criminal Records Bureau)</Text>
        </TouchableOpacity>
        {crbImage && <Image source={{ uri: crbImage }} style={styles.image} />}
        </View>
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <LinearGradient colors={['#F66F6F', '#DB0DC1']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.gradient}>
                <Text style={styles.verifyButtonText}>Verify</Text>
            </LinearGradient>
        </TouchableOpacity>
        {/*
        <Button title="Verify" onPress={handleVerify} style={styles.verifyButton} />
        */}
            </View>
        </View>
  
    </View>
</ScrollView>
);
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    rectangle: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 11,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 4,
        alignItems: 'center',
        paddingTop:30,
        paddingBottom:30,
      },
    heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:10,
    marginBottom: 20,
    },
    inputContainer: {
    width: '80%',
    },
    input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    },

    imageContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    },
    imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    },
    scanCont: {
        flexDirection:'row', 
        height:110, 
        alignItems:'center'
      },
      scan: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 14,
        top: 15
      },
      scanCamLogo: {
        position: 'absolute',
        bottom: 33,
      },
      scanText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '300',
        textAlign: 'center',
        lineHeight: 14,
        bottom: -45
      },
  
    verifyButton: {
    marginTop: 20,
    backgroundColor: 'linear-gradient(136.79deg, #F66F6F 10.89%, #DB0DC1 125.07%)',
    borderRadius: 12,
    },
    loginButton: {
        width: '80%',
        height: 50,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        shadowColor: 'red',
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        elevation: 2,
      },
      gradient: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      verifyButtonText: {
        padding:5,
        alignItems:'center',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
      },
    });

    