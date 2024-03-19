import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import lodoImage from '../image/man.png';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import Ionicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionico from 'react-native-vector-icons/Entypo';
import Ionic from 'react-native-vector-icons/MaterialIcons';
import Ioni from 'react-native-vector-icons/FontAwesome';
import Ionis from 'react-native-vector-icons/Ionicons';
import Iconst from 'react-native-vector-icons/FontAwesome6';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sidescreen = () => {
    const navigation = useNavigation();
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            RNRestart.Restart()
            navigation.navigate('SignIn');
        } catch (error) { }
    };
    return (
        <ImageBackground source={require('../image/background.png')} resizeMode="cover" style={styles.image} >
            <ScrollView>
                <View>
                    <View style={{ marginTop: 12 }}>
                        <Image source={lodoImage} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#fff', borderRadius: 50, alignSelf: 'center' }} />
                    </View>
                    <View>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, marginTop: 4 }}> Piyush chauhan</Text>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 13, marginTop: 3 }}> pcchauhan2221@gmail.com</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")} style={{ marginTop: 30, flexDirection: 'row', marginBottom: 3 }}>
                        <View>
                            <Text style={{ paddingTop: 5 }}><Ionicons size={35} name="user" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>My Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Stats")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionicon size={25} name="chart-timeline-variant" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Stats</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Wallet")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionico size={25} name="wallet" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>My wallet</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionic size={25} name="business" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Leaderboard</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("MyReferrals")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ioni size={22} name="users" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>My Referrals</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Deposit")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionicon size={25} name="cash-100" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Deposit Limit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionis size={23} name="settings-sharp" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ResponsibleGaming")} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionico size={24} name="open-book" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Responsible Gaming</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLogout()} style={{ marginVertical: 5, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Iconst size={20} name="power-off" color={'#fff'} /></Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 17, marginVertical: 15, fontWeight: '600' }}>Social Media</Text>
                    <TouchableOpacity style={{ marginVertical: 6, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ paddingTop: 5, marginRight: 8 }}><Ioni size={22} name="telegram" color={'#fff'} /> </Text>
                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 17, marginTop: 3 }}>Telegram</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 17,
        paddingTop: 40
    },
})
export default Sidescreen