import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Iconst from 'react-native-vector-icons/FontAwesome';
import Iconstar from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { getData } from './helperFile';

const Payment = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
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
        handleWinhistory();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 30 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Payment history</Text>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 17, textAlign: 'right', marginRight: 10 }}>Winning</Text>
                </View>
            </View>
            <ScrollView style={{ paddingTop: 10, paddingBottom: 170, marginHorizontal: 10 }}>
                {historyData.map((item, index) => (
                    <View key={index} style={{ borderWidth: 0.7, borderColor: '#999', padding: 15, borderRadius: 5, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View>
                                <View>
                                    <Text style={{ color:'#3aa60f', fontSize: 12 }}>ChallengeId:000{item.challenge_id}</Text>
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

export default Payment;
