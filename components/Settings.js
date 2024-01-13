import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconsta from 'react-native-vector-icons/Ionicons';
import Iconst from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

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
                            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>Settings</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text><Iconsta size={25} name="chatbubble-ellipses-outline" color={'#fff'} /></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 15 }}>
                    <View style={{ backgroundColor: '#BA1E1E', borderRadius: 10, marginVertical: 10, padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Sound</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#BA1E1E', borderRadius: 10, marginVertical: 10, padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Music</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                                style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#BA1E1E', borderRadius: 10, marginVertical: 10, padding: 13, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>Log Out</Text>
                        <TouchableOpacity>
                            <Text><Iconst size={25} name="power-off" color={'#fff'} /></Text>
                        </TouchableOpacity>
                    </View>
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
