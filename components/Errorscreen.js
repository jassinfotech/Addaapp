import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList, } from 'react-native';
import IconStar from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import upload from '../image/upload.png';
import lodoImage from '../image/lodoking.png';
import dropdown from '../image/dropdown.png';
const countries = [
    { country: 'Afghanistan', },
    { country: 'eeeee', },

];
const Errorscreen = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [formattedUri, setFormattedUri] = useState();
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState('');

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });

            console.log('--------------', result);

            if (result && result.uri) {
                setSelectedImage({ uri: result.uri });
                setFormattedUri(result.uri);
                console.log('Selected image URI:', result.uri);
            }
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                console.log('User cancelled image picker');
            } else {
                console.log('DocumentPicker Error: ', error);
            }
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
                            source={lodoImage}
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
                    {clicked ? (
                        <View
                            style={{ elevation: 5, marginTop: 20, height: 300, alignSelf: 'center', width: '90%', backgroundColor: '#fff', borderRadius: 10, color: '#000' }}>
                            <FlatList
                                style={{ height: 50 }}
                                data={data}
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
                    ) : null}
                </View>
                <TouchableOpacity style={styles.confirmButton}>
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
