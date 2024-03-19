import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Modal, TextInput, RefreshControl } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconset from 'react-native-vector-icons/Feather';
import Iconsts from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Mychallenges from './Mychallenges';
import { getData, postData } from './helperFile';
import ClassicScreen from './ClassicScreen';
const Lodoking = () => {
    const [amount, setAmount] = useState('');
    const [dname, setDname] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [challengeData, setChallengeData] = useState([]);
    const [acceptchallengeData, setAcceptchallengeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    const handleButtonPress = () => {
        onRefresh();
    };
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const handleAmountSelection = (selectedAmount) => {
        setAmount(selectedAmount.toString());
    };

    const handleGetCartData = async () => {
        try {
            const response = await getData('user/get-all-challenges');
            setChallengeData(response);
        } catch (error) {
            console.error('Get request error:', error);
        }
    };
    const handleAcceptChallenge = async (challengeId) => {
        console.log('challengeId-------', challengeId)
        try {
            const response = await postData('user/accept-challenge', { challengeId });
            handleGetCartData();
        } catch (error) {
            console.error('Accept challenge error:', error);
            Alert.alert('Error', 'Failed to accept the challenge. Please try again.');
        }
    };
    const myGetCartData = async () => {
        try {
            const response = await getData('user/get-accept-challenges');
            console.log("-------------------------", response);
            setAcceptchallengeData(response);
            setIsLoading(false);
        } catch (error) {
            console.error('Get request error:', error);
        }
    };

    useEffect(() => {
        handleGetCartData();
        myGetCartData();
    }, []);

    const hemdelcreateChallenge = async () => {
        if (!dname || !amount) {
            return;
        }
    
        try {
            const response = await postData('user/create-challenge', { dname, amount });
            console.log('--------', response);
            toggleModal();
        } catch (error) {
            console.error('Accept challenge error:', error);
            Alert.alert('Error', 'Failed to accept the challenge. Please try again.');
        }
    };
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='40' color="#BA1E1E" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 25 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Lodo king</Text>
                        </View>
                    </View>
                </View>

            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View>
                    <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, padding: 8, marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: '#000' }}> My challenges</Text>
                    </View>
                    <View>
                        <Mychallenges acceptchallengeData={acceptchallengeData} />
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, padding: 8, marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: '#000' }}> Live challenges</Text>
                        </View>
                        <View>
                            <ClassicScreen challengeData={challengeData} handleAcceptChallenge={handleAcceptChallenge} />
                        </View>

                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomBox}>
                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconstar size={25} name="playcircleo" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 2 }}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonPress} style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconset size={24} name="refresh-ccw" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>Refresh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Icons size={23} name="user-friends" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 5 }}>buddt list</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }} onPress={toggleModal}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconsts size={25} name="plus" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>Create Challenge</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ backgroundColor: '#BA1E1E', padding: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Add challenges</Text>
                        </View>
                        <TouchableOpacity style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Icons name="gamepad" size={20} color="#000" />
                            </View>
                            <TextInput
                                placeholder="Enter name"
                                placeholderTextColor="#999"
                                value={dname}
                                onChangeText={(text) => setDname(text)}
                                style={styles.input}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Icons name="coins" size={20} color="#000" />
                            </View>
                            <TextInput
                                placeholder="Enter Coins"
                                placeholderTextColor="#999"
                                style={styles.input}
                                value={amount}
                                onChangeText={(text) => setAmount(text)}
                                keyboardType="numeric"
                            />
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <TouchableOpacity onPress={() => handleAmountSelection(10)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>10</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(20)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>20</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(500)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '50' }}>50</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
                                <TouchableOpacity onPress={() => handleAmountSelection(100)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>100</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(200)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(500)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>500</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ color: '#BA1E1E', fontSize: 12 }}>Coins must be in multiple fo i.e 10,20,30,40,50,..</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#BA1E1E', fontSize: 12 }}>Coins must be in multiple fo i.e 10,20,30,40,50,..</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => hemdelcreateChallenge()} style={{ backgroundColor: '#BA1E1E', padding: 10, borderRadius: 20, marginHorizontal: 20, marginVertical: 15, marginTop: 20 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Add challenges</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(253, 6, 6, 0.43)',
        paddingBottom: 70,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#f1e6ea',
        borderRadius: 10,
        width: 320
    },
    inputContainer: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#A8A8A8',
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 5,
    },
    iconContainer: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 13,
        fontWeight: '500',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(253, 6, 6, 0.43)',
    }
});


export default Lodoking;
