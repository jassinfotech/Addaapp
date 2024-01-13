import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import lodoImage from '../image/man.png';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import Ionicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionico from 'react-native-vector-icons/Entypo';
import Ionic from 'react-native-vector-icons/MaterialIcons';
import Ioni from 'react-native-vector-icons/FontAwesome';
import Ionis from 'react-native-vector-icons/Ionicons';
import Ionisa from 'react-native-vector-icons/AntDesign';

const Sidescreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View>
                <View>
                    <Image source={lodoImage} style={{ width: 80, height: 80, borderWidth: 1, borderColor: '#fff', borderRadius: 50, alignSelf: 'center' }} />
                </View>
                <View>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, marginTop: 4 }}> Piyush chauhan</Text>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 13, marginTop: 3 }}> pcchauhan2221@gmail.com</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("MyProfile")} style={{ marginTop: 30, flexDirection: 'row', marginBottom: 3 }}>
                    <View>
                        <Text style={{ paddingTop: 5 }}><Ionicons size={40} name="user" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>My Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Stats")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionicon size={30} name="chart-timeline-variant" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Stats</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Wallet")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionico size={30} name="wallet" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>My wallet</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionic size={30} name="business" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Leaderboard</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionico size={28} name="game-controller" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>My Played Quiz</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("MyReferrals")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ioni size={27} name="users" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>My Referrals</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Deposit")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionicon size={30} name="cash-100" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Deposit Limit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionis size={28} name="settings-sharp" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Settings</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ResponsibleGaming")} style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionico size={29} name="open-book" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Responsible Gaming</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionisa size={27} name="questioncircle" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Tutorial</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, marginVertical: 15 }}></View>
                <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Social Media</Text>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ioni size={27} name="telegram" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Telegram</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionisa size={27} name="instagram" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>instagram</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 3, flexDirection: 'row' }}>
                    <View>
                        <Text style={{ paddingTop: 5, marginRight: 8 }}><Ionisa size={27} name="youtube" color={'#fff'} /> </Text>
                    </View>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>Youtube</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default Sidescreen