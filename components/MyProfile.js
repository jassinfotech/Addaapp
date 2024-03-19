import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import man from '../image/man.png';

const MyProfile = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 30 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>My Profile</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ backgroundColor: '#BA1E1E', padding: 15, marginVertical: 10, borderRadius: 15, height: 400 }}>
                        <View>
                            <Image source={man} style={{ width: 90, height: 90, borderRadius: 50, alignSelf: 'center', borderWidth: 1, borderColor: '#fff' }} />
                            <View style={{ position: 'absolute', top: 60, left: 60, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 50, backgroundColor: '#fff', padding: 2 }}>
                                    <Text><Iconst size={25} name="edit" color={'#000'} /></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Name :- Piyush chauhan</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}> E mail :- pcchauhan2221@gmail.com</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Mobile number :- 1234567890</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Aadhar Number :- *******2341</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});


export default MyProfile;
