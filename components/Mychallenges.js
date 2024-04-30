import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Modal, ToastAndroid } from 'react-native';
import IconStar from 'react-native-vector-icons/AntDesign';
import lodoImage from '../image/logo.png';
import { useNavigation } from '@react-navigation/native';
import { postData } from './helperFile';

const MyChallenges = ({ acceptchallengeData }) => {
    // console.log('acceptchallengeData--------------=',acceptchallengeData)
    const navigation = useNavigation();
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
    const [items, setItem] = useState(null)
    const toggleConfirmationModal = () => {
        setConfirmationModalVisible(!isConfirmationModalVisible);
    };
    const showCancelConfirmation = (challenge) => {
        console.log("{challenge--------------------------------------------------->}, challenge", challenge.id);
        setItem(challenge.id)
        toggleConfirmationModal();
    };

    const handleCancel = async () => {
        console.log('challengeId---', items)
        try {
            const response = await postData('user/cancel-challenge', { challengeId: items });
            var message = response.message
            ToastAndroid.show(message, ToastAndroid.SHORT);
            toggleConfirmationModal();
            goBack();
        } catch (error) {
            console.error('Cancel request error:', error);
        }
    };
    return (
        <View>
            <ScrollView style={{ flexDirection: 'row', paddingHorizontal: 10 }} horizontal={true}>
                {acceptchallengeData && acceptchallengeData.length > 0 ? (
                    acceptchallengeData.map((challenge, index) => (
                        <View
                            key={index}
                            onPress={() => navigation.navigate("Contested", { challengeId: challenge })}
                            style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7, width: 200, }}
                        >
                            <View style={{ padding: 5 }}>
                                <View>
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center', marginTop: 10 }}>
                                        {challenge.opponent_username} has accepted this {'\n'}  challenge
                                    </Text>
                                    <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center', marginTop: 10 }}>{challenge.amount}</Text>
                                </View>
                                <View>
                                    <Image source={lodoImage} style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{challenge.name}</Text>
                                </View>
                            </View>
                            {
                                challenge.status === 'accepted' ? (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate("Contested", { challengeId: challenge })} style={{ backgroundColor: '#3aa60f', borderBottomRightRadius: 0, borderBottomLeftRadius: 10, paddingVertical: 4, width: '50%' }}>
                                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}> Update room code</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { showCancelConfirmation(challenge) }} style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 0, paddingVertical: 4, width: '50%' }}>
                                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                ) : (

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => { showCancelConfirmation(challenge) }} style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingVertical: 4, width: '100%' }}>
                                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}> {challenge.status === 'canceled' ? "Cancel" : "Canceled"}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </View>
                    ))
                ) : (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#777', fontSize: 16 }}>No challenges </Text>
                    </View>
                )}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isConfirmationModalVisible}
                onRequestClose={toggleConfirmationModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent1}>
                        <Text style={{ color: '#000', textAlign: 'center', fontSize: 16, marginBottom: 15 }}>
                            Confirm Cancellation
                        </Text>
                        <Text style={{ color: '#000', paddingBottom: 10, textAlign: 'center', fontSize: 14 }}>Are you sure want to cancel this challenge</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <TouchableOpacity
                                onPress={handleCancel} >
                                <Text style={styles.yes}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity

                                onPress={toggleConfirmationModal}
                            >
                                <Text style={styles.yes}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({

    modalContent: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 250
    },
    modalContent1: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 250,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    yes: {
        backgroundColor: '#BA1E1E',
        paddingHorizontal: 30,
        borderRadius: 20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        paddingVertical: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default MyChallenges