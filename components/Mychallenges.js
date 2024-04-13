import { View, Text, ScrollView, Image, TouchableOpacity,ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import lodoImage from '../image/man.png';
import { postData } from './helperFile';

const MyChallenges = ({ acceptchallengeData}) => {
    const navigation = useNavigation();

    const handleDelete = async  (challengeId) => {
       
        console.log('deleted',challengeId);
        try {
            const response = await postData('user/delete-challenge', { challengeId});
            console.log('delete---------------', response);
            var message = response.message
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } catch (error) {
            console.error('Delete request error:', error);
        }
    };
    return (
        <View>
            <ScrollView style={{ flexDirection: 'row', paddingHorizontal: 10 }} horizontal={true} >
                {acceptchallengeData.map((challenge, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate("Contested", { challengeId: challenge })} style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7, width: 200 }}>
                        <View style={{ padding: 5 }}>
                            <View>
                                <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>{challenge.unique_id}</Text>
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>Your challenge has been accepted</Text>
                                <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>{challenge.amount}</Text>
                            </View>
                            <View>
                                <Image source={lodoImage} style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{challenge.name}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {challenge.status === 'pending' ? (
                            <View style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: '100%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Cancel</Text>
                            </View>
                        ):(
                            <TouchableOpacity   onPress={() => {
                                handleDelete(challenge.id);
                            }} style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: '100%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        )}
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default MyChallenges