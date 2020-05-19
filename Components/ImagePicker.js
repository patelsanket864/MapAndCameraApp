import React, {useState} from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const ImgPicker = props => {
    const [pickedPhoto,setPickedPhoto] =useState();

    const takeImageHandler = async () => {
        const img=await ImagePicker.launchCameraAsync();
        setPickedPhoto(img.uri);
        props.onImageTaken(img.uri);
    };

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedPhoto ? (<Text>No image picked yet.</Text>)
                : (<Image style={styles.image} source={{uri : pickedPhoto }} />)}
            </View>
            <Button
                title="Take Image"
                color='black'
                onPress={takeImageHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  imagePicker: {
    height:'100%',
    width:'100%',
    alignItems: 'center'
  },
  imagePreview: {
    width: '80%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor:'red'
  }
});

export default ImgPicker;
