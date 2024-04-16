import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList, } from 'react-native';
import IconStar from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import upload from '../image/upload.png';
import dropdown from '../image/dropdown.png';
import axios from 'axios'
const countries = [
    { country: 'Afghanistan', },
    { country: 'eeeee', },

];
const Errorscreen = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [data, setData] = useState();
    const [clicked, setClicked] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });

            console.log('Cropped Image:', result);
            if (!Array.isArray(result) || result.length === 0) {
                throw new Error('Invalid image selection');
            }
            const selectedImage = {
                uri: result[0].uri,
                type: 'image/jpeg',
                name: new Date().getTime() + '_banner.jpg',
            };

            console.log('Selected Image:', selectedImage);

            setSelectedImage(selectedImage);
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                console.log('Image selection canceled');
            } else {
                console.log('Image selection/cropping failed:', error);
                Alert.alert('Error', 'Failed to select image. Please try again.');
            }
        }
    };


    const handleScreenshort = async () => {
        try {
            const formData = new FormData();
            formData.append("userEmail", userEmail);

            if (selectedImage) {
                formData.append("file", {
                    name: 'screenshot.jpg',
                    type: 'image/jpeg',
                    uri: selectedImage.uri,
                });
            }
            try {
                const response = await postData('user/user/screenshot',{formData});
                // console.log('---------------', response);
                var message = response.message
                ToastAndroid.show(message, ToastAndroid.SHORT);
            } catch (error) {
                console.error('screenshot request error:', error);
            }
            

        } catch (error) {
            console.error('Error while saving event:', error);
        }
    };
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 25 }}>
                <View style={{ padding: 15, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={goBack}>
                        <IconStar size={20} name="arrowleft" color={'#fff'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: '#fff', marginLeft: 10 }}>Logo Contested</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.imageContainer}>
                    {selectedImage ? (
                        <Image
                            source={{ uri: selectedImage.uri }}
                            style={styles.selectedImage}
                            resizeMode="contain"
                        />
                    ) : (
                        <Text style={styles.noImageText}>No valid image selected</Text>
                    )}
                </View>
                <TouchableOpacity style={styles.selectImageButton} onPress={pickImage}>
                    <Text style={styles.buttonText}>CLICK TO UPDATE SCREENSHOT</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.bottomBox}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            width: 350, height: 50, borderRadius: 10, borderWidth: 0.5, alignSelf: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between',
                            alignItems: 'center', paddingLeft: 15, paddingRight: 15, marginBottom: 20
                        }}
                        onPress={() => {
                            setClicked(!clicked);
                        }}>
                        <Text style={{ fontWeight: '600', color: '#000' }}>
                            {selectedCountry == '' ? 'Select' : selectedCountry}
                        </Text>
                        {clicked ? (
                            <Image source={dropdown}
                                style={{ width: 18, height: 18 }}
                            />
                        ) : (
                            <Image source={upload}
                                style={{ width: 20, height: 20 }}
                            />
                        )}
                    </TouchableOpacity>
                    {/* {clicked ? (
                        <View
                            style={{ elevation: 5, marginTop: 20, height: 300, alignSelf: 'center', width: '90%', backgroundColor: '#fff', borderRadius: 10, color: '#000' }}>
                            <FlatList
                                style={{ height: 50 }}
                                data={country}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{ width: 350, alignSelf: 'center', height: 50, justifyContent: 'center', borderBottomWidth: 0.5, borderColor: '#8e8e8e', color: '#000' }}
                                            onPress={() => {
                                                setSelectedCountry(item.country);
                                                setClicked(!clicked);
                                            }}>
                                            <Text style={{ fontWeight: '600', color: '#000', paddingHorizontal: 25 }}>{item.country}</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    ) : null} */}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handleScreenshort();
                    }}
                    style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
        backgroundColor: 'rgba(153, 6, 6, 0.43)'
    },
    imageContainer: {
        width: '80%',
        height: 450,
        marginTop: 20,
        borderColor: '#000',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedImage: {
        width: '100%',
        height: '100%',
    },
    noImageText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
    selectImageButton: {
        backgroundColor: '#BA1E1E',
        padding: 10,
        marginHorizontal: 37,
        borderRadius: 6,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    bottomBox: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmButton: {
        backgroundColor: '#BA1E1E',
        paddingHorizontal: '40%',
        paddingVertical: 10,
        borderRadius: 6,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default Errorscreen;
