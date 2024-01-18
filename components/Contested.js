import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, TextInput, RefreshControl } from 'react-native';
import React, { useState, useCallback } from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconset from 'react-native-vector-icons/Entypo';
import Iconsts from 'react-native-vector-icons/Ionicons';
import Iconstss from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Imagetabs from './Imagetabs';
import lodoImage from '../image/man.png';



const Contested = () => {


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
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Lodo Contested</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{ borderColor: '#ddd', borderWidth: 1, borderRadius: 7, padding: 7, margin: 10 }}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#BA1E1E', textAlign: 'center', marginVertical: 20 }}>LUDO_jdisjsw2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <View>
                            <Image source={lodoImage} style={{ width: 70, height: 70, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                            <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>sanjay</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11, textAlign: 'center', justifyContent: 'center', marginTop: 30 }}>VS</Text>
                        </View>
                        <View>
                            <Image source={lodoImage} style={{ width: 70, height: 70, borderWidth: 1, borderColor: '#BA1E1E', borderRadius: 50, alignSelf: 'center' }} />
                            <Text style={{ color: '#000', fontSize: 11, textAlign: 'center' }}>000000</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <View style={{ borderWidth: 0.9, borderColor: '#000', paddingVertical: 5, borderRadius: 7, paddingHorizontal: 10, width: '32%' }}>
                            <Text style={{ color: '#10A910', fontSize: 14 }}>challenged</Text>
                            <Text style={{ color: '#10A910', fontSize: 14 }}>coins-10.0</Text>
                        </View>
                        <View style={{ borderWidth: 0.9, borderColor: '#000', paddingVertical: 5, borderRadius: 7, paddingHorizontal: 10, width: '32%' }}>
                            <Text style={{ color: '#055405', fontSize: 14 }}>Winning</Text>
                            <Text style={{ color: '#055405', fontSize: 14 }}>coins-10.0</Text>
                        </View>
                        <View style={{ borderWidth: 0.9, borderColor: '#000', paddingVertical: 5, borderRadius: 7, paddingHorizontal: 10, width: '32%', flexDirection: 'row', }}>
                            <Text style={{ color: '#BA1E1E', fontSize: 14 }}>Update Room Code To Proceed</Text>
                            <TouchableOpacity>
                                <Text style={{ marginTop: 23, textAlign: 'center', right: 20 }}> <Iconstss size={25} name="file-copy" color={'#650505'} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                    <TouchableOpacity style={{backgroundColor:'#BA1E1E',padding:10,width:'50%'}}>
                        <Text style={{color:'#fff',fontSize:14,textAlign:'center'}}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal} style={{backgroundColor:'#BA1E1E',padding:10,width:'50%'}}>
                        <Text style={{color:'#fff',fontSize:14,textAlign:'center'}}>Update Room Code</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'rgba(253, 6, 6, 0.43)',borderColor:'#BA1E1E',borderWidth:1,borderRadius:4,margin:10,padding:10}}>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                   <Text style={{color:'#000',fontSize:12}}> 1.If you have won take a Screenshot of Winning page from  LudoKing app. Click below on Won to Update the Screenshot & than on confirm to win</Text>
                </View>
            </ScrollView>




            <View style={styles.bottomBox}>

                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconsts size={24} name="trophy-outline" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>WON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }}>
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconsts size={25} name="sad-outline" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 5 }}> LOST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '25%' }} onPress={() => navigation.navigate("Errorscreen")} >
                    <Text style={{ marginTop: 1, textAlign: 'center' }}> <Iconset size={25} name="circle-with-cross" color={'#fff'} /></Text>
                    <Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 4 }}>ERROR </Text>
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
                                placeholder="Enter Coins"
                                placeholderTextColor="#999"
                                style={styles.input}
                                value={amount}
                                onChangeText={(text) => setAmount(text)}
                                keyboardType="numeric"
                            />
                        </TouchableOpacity>
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
        width: 250
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


export default Contested;
