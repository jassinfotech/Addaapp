import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, TextInput, RefreshControl } from 'react-native';
import React, { useState, useCallback } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconset from 'react-native-vector-icons/Feather';
import Iconsts from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Imagetabs from './Imagetabs';
import lodoImage from '../image/man.png';


const notificationData = {
    id: 'nzkJXDNkj',
    message: 'Your challenge has been accepted',
    coins: '100.0 Coins',
    imageSource: lodoImage, 
    senderName: 'sanjay',
  };
const Lodoking = () => {
    const [refreshing, setRefreshing] = useState(false);

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
    const [amount, setAmount] = useState('');
    const handleAmountSelection = (selectedAmount) => {
        setAmount(selectedAmount.toString());
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
                    <View onPress={() => navigation.navigate("Contested")} style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7, width: '50%' }}>
                        <View style={{ padding: 5 }}>
                            <View>
                                <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>{notificationData.id}</Text>
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{notificationData.message}</Text>
                                <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>{notificationData.coins}</Text>
                            </View>
                            <View>
                                <Image source={notificationData.imageSource} style={{ width: 30, height: 30, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>{notificationData.senderName}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Contested")}  style={{ backgroundColor: '#55bc83', borderBottomLeftRadius: 10, width: '50%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Update Room Code</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, width: '50%', padding: 3 }}>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, padding: 8, marginVertical: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ color: '#000' }}> Live challenges</Text>
                        </View>
                        <View>
                            <Imagetabs />
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>nzkJXDNkj</Text>
                                    <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>has challenges for</Text>
                                    <Text style={{ color: '#BA1E1E', fontSize: 14, textAlign: 'center' }}>100.0 Coins</Text>
                                </View>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ backgroundColor: '#55bc83', borderBottomLeftRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Winning :213 .coins</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>nzkJXDNkj</Text>
                                    <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>has challenges for</Text>
                                    <Text style={{ color: '#BA1E1E', fontSize: 14, textAlign: 'center' }}>100.0 Coins</Text>
                                </View>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ backgroundColor: '#55bc83', borderBottomLeftRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Winning :213 .coins</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Accept</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10, marginVertical: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#BA1E1E', fontSize: 11, textAlign: 'center' }}>nzkJXDNkj</Text>
                                    <Text style={{ color: '#000', fontSize: 14, textAlign: 'center' }}>has challenges for</Text>
                                    <Text style={{ color: '#BA1E1E', fontSize: 14, textAlign: 'center' }}>100.0 Coins</Text>
                                </View>
                                <View>
                                    <Image source={lodoImage} style={{ width: 50, height: 50, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                                    <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ backgroundColor: '#55bc83', borderBottomLeftRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Winning :213 .coins</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#BA1E1E', borderBottomRightRadius: 10, width: '50%', padding: 3 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Accept</Text>
                                </TouchableOpacity>
                            </View>
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
                        <View style={{ backgroundColor: '#BA1E1E', padding: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Add challenges</Text>
                        </View>
                        <TouchableOpacity style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Icons name="gamepad" size={20} color="#000" />
                            </View>
                            <TextInput
                                placeholder="Enter name"
                                placeholderTextColor="#999"
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
                                <TouchableOpacity onPress={() => handleAmountSelection(100)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>100</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(200)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>200</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(500)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>500</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 }}>
                                <TouchableOpacity onPress={() => handleAmountSelection(1000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>1000</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(2000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>2000</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleAmountSelection(5000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 20, backgroundColor: '#fff' }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>5000</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ color: '#BA1E1E', fontSize: 12 }}>Coins must be in multiple fo i.e 10,20,30,40,50,..</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#BA1E1E', fontSize: 12 }}>Coins must be in multiple fo i.e 10,20,30,40,50,..</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: '#BA1E1E', padding: 10, borderRadius: 20, marginHorizontal: 20, marginVertical: 15, marginTop: 20 }}>
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
        paddingBottom: 70
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
});


export default Lodoking;
