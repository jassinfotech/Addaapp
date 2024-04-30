import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import Iconsts from 'react-native-vector-icons/Entypo';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getData } from './helperFile';


const Wallet = () => {
    const navigation = useNavigation();
    const [currentb, setCurrentb] = useState('');


    const goBack = () => {
        navigation.goBack();
    };

    const handleGetuserwallet = async () => {
        try {
            const response = await getData('user/user-wallet');
            console.log('get-user-wallet------------', response)
            setCurrentb(response.WalletBalance)
        } catch (error) {
            console.error('Get request error:', error);
        }
    };


    const [historyData, setHistorydata] = useState([]);

    const handleWinhistory = async () => {
        try {
            const response = await getData('user/win-history');
            console.log('handleWinhistory-----=====', response)
            setHistorydata(response)
        } catch (error) {
            console.error('Get request error:', error);
        }
    };

    useEffect(() => {
        handleGetuserwallet();
        handleWinhistory();
    }, []);


    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                handleGetuserwallet();
            })();
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 35 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>My Wallet</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={{ width: "auto", alignItems: "flex-end", backgroundColor: '#e84649', padding: 7, borderRadius: 7, paddingHorizontal: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>payment history</Text>
                            <Text style={{ marginHorizontal: 5, marginTop: 2 }}> <Iconst size={16} name="history" color={'#fff'} /></Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: '#A80331', width: '48%', height: 100, marginVertical: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', paddingTop: 10 }}>My money</Text>
                            {currentb.status === 'pending' ? (
                                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 17, textAlign: 'center', top: 15 }}>₹0</Text>
                            ) : (
                                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 17, textAlign: 'center', top: 15 }}>₹{currentb}</Text>
                            )}

                        </View>
                        <View style={{ backgroundColor: '#A80331', width: '48%', height: 100, marginVertical: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', paddingTop: 10 }}>Total winning</Text>
                            {currentb.status === 'pending' ? (
                                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 17, textAlign: 'center', top: 15 }}>₹0</Text>
                            ) : (
                                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 17, textAlign: 'center', top: 15 }}>₹0</Text>
                            )}
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 16 }}>Recent Transactions</Text>
                            </View>

                        </View>

                        {historyData.map((item, index) => (
                            <View key={index} style={{ borderWidth: 0.7, borderColor: '#999', padding: 15, borderRadius: 5, marginBottom: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View>
                                        <View>
                                            <Text style={{ color: '#3aa60f', fontSize: 12 }}>ChallengeId:000{item.challenge_id}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#000', fontSize: 14, marginTop: 6 }}>Date: {new Date(item.created_at).toLocaleDateString()}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#3aa60f', fontSize: 12 }}>Winning</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                            <Text style={{ color: '#000', fontSize: 15 }}>{item.amount}</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>

                </View>
            </ScrollView>
            <View style={styles.bottomBox}>
                <TouchableOpacity onPress={() => navigation.navigate("Addmoney")}>
                    <Text style={{ marginTop: 1 }}> <Iconsts size={19} name="plus" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff' }}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Withrow")}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconst size={17} name="bank" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff' }}>Withrow</Text>
                </TouchableOpacity>
            </View>

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


export default Wallet;
