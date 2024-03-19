import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings = () => {
    const navigation = useNavigation();
 
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginHorizontal: 15 }}>
                    {/* <TouchableOpacity 
                        style={{ backgroundColor: '#BA1E1E', borderRadius: 10, marginVertical: 10, padding: 13, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Log Out</Text>
                        <Text><Iconst size={25} name="power-off" color={'#fff'} /></Text>
                    </TouchableOpacity> */}
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 13 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Terms and Conditions</Text>
                            </View>
                            <View>
                                <Text><Iconstar size={24} name="right" color={'#000'} /></Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 13 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Privacy and Policy</Text>
                            </View>
                            <View>
                                <Text><Iconstar size={24} name="right" color={'#000'} /></Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 13 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>Contact us</Text>
                            </View>
                            <View>
                                <Text><Iconstar size={24} name="right" color={'#000'} /></Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 13 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>About us</Text>
                            </View>
                            <View>
                                <Text><Iconstar size={24} name="right" color={'#000'} /></Text>
                            </View>
                        </TouchableOpacity>
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


export default Settings;
