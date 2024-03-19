import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Addmoney = () => {
    const [amount, setAmount] = useState('');
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    const handleAmountSelection = (selectedAmount) => {
        setAmount(selectedAmount.toString());
    };

    const handleAddMoney = () => {
        console.log('Adding money:', amount);
    };
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E',paddingTop:35 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Add Money</Text>
                        </View>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontSize: 12, marginTop: 3 }}>Total Balance:</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text> <Iconst size={11} name="rupee" color={'#fff'} /></Text>
                        <Text style={{ color: '#fff', fontSize: 12, marginLeft: 3, marginTop: 3 }}>10.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text style={{ color: '#000', fontSize: 13 }}>Select Amount</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <TouchableOpacity   onPress={() => handleAmountSelection(100)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 45, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => handleAmountSelection(200)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 45, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>200</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => handleAmountSelection(500)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 45, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>500</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <TouchableOpacity   onPress={() => handleAmountSelection(1000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 40, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>1000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => handleAmountSelection(2000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 40, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>2000</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={() => handleAmountSelection(5000)} style={{ borderWidth: 1, borderColor: '#A8A8A8', paddingVertical: 17, paddingHorizontal: 40, borderRadius: 8 }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: '500' }}>5000</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                <Text style={{ color: '#000', fontSize: 13 }}>Or enter a different amount</Text>
            </View>
            <TouchableOpacity style={{ marginHorizontal: 10, borderWidth: 1, borderColor: '#000', marginTop: 10, borderRadius: 3 }}>
                <TextInput
                    placeholder="Enter amount in rupees"
                    placeholderTextColor="#999" 
                    style={{ color: '#000', fontSize: 13, textAlign: 'center',fontWeight:'500' }}
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                    keyboardType="numeric"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomBox}>
                <Text style={{ color: '#fff' }} >Add </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomBox: {
        backgroundColor: '#BA1E1E',
        position: 'absolute',
        bottom: 34,
        width: '95%',
        padding: 13,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 20
    },
});

export default Addmoney