import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import lodoImage from '../image/man.png';
import { getData } from './helperFile';

const MyChallenges = ({ acceptchallengeData }) => {
    const navigation = useNavigation();
    const [challengeData, setChallengeData] = useState([]);
    const handleGetCartData = async () => {
        try {
            const response = await getData('user/get-accept-challenges');
            console.log('-----------', response);
            setChallengeData(response);
        } catch (error) {
            console.error('Get request error:', error);
        }
    };
    useEffect(() => {
        handleGetCartData();
    }, []);
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
                            <View style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: '100%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Cancel</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default MyChallenges