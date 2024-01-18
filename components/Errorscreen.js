import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, } from 'react-native';
import React, { useState } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconset from 'react-native-vector-icons/Entypo';
import Iconsts from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';



const Errorscreen = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });

            setSelectedImage({ uri: result.uri });
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
            <View style={{ backgroundColor: '#BA1E1E' }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Lodo Contested</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{
                    width: '80%',
                    height: 450,
                    marginTop: 20,
                    borderColor: '#000',
                    borderWidth: 1,
                    alignSelf: 'center',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    backgroundColor:'#fff'
                }}>
                    {selectedImage && (
                        <Image source={selectedImage} style={styles.selectedImage} resizeMode="contain" />
                    )}

                </View>
                <View>
                    <TouchableOpacity style={styles.selectImageButton} onPress={pickImage}>
                        <Text style={styles.buttonText}>CLICL TO UPDATE SCREENSHOT</Text>
                    </TouchableOpacity>
                </View>

                <View></View>
            </ScrollView>
            <View style={styles.bottomBox}>
                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconsts size={24} name="trophy-outline" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>WON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconsts size={25} name="sad-outline" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 5 }}> LOST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }} onPress={() => navigation.navigate("Errorscreen")} >
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconset size={25} name="circle-with-cross" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>ERROR </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
        backgroundColor:'rgba(153, 6, 6, 0.43)'
    },
    bottomBox: {
        backgroundColor: '#BA1E1E',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 250
    },
    inputContainer: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#A8A8A8',
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5,
    },

    selectedImage: {
        width: '100%',
        height: '100%',
    },
    selectImageButton: {
        backgroundColor: '#BA1E1E',
        padding: 10,
        marginHorizontal:37
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign:'center'
    },
});


export default Errorscreen;
