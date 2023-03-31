import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React,{useState, useEffect} from 'react';
import Camera_icon from '../assets/svg_icons/camera_icon.svg';
import * as ImagePicker from 'expo-image-picker';


const PhotoUpload = ({width, onPress,title,discription,height}) => {

    const [hasGalleryPermission,setHasGalleryPermissions] = useState(null);
    const [hasCameraPermissions,setHasCameraPermissions] = useState(null);
    const [image,setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermissions(galleryStatus.status === 'granted');
            const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
            setHasCameraPermissions(cameraStatus.status === 'granted');
        })();
    },[]);

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });

        console.log(result);
    }

    

  return (
    <TouchableOpacity style={[styles.container,{width:width,height:height}]} onPress={() => pickImage()}>
        
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

//commit before installing image crop picker
//commit brefore installing progress bar package