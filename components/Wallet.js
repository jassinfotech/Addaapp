import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import React from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import Iconsts from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Wallet = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
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
                            <Text style={{ color: '#fff', marginLeft: 10 }}>My Wallet</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Payment")}   style={{ width: "auto", alignItems: "flex-end", backgroundColor: '#e84649', padding: 7, borderRadius: 7, paddingHorizontal: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{}}>payment history</Text>
                            <Text style={{ marginHorizontal: 5, marginTop: 2 }}> <Iconst size={16} name="history" color={'#fff'} /></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, }}>Total balance</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <Text style={{ marginHorizontal: 5, marginTop: 4 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                        <Text style={{ color: '#fff', fontSize: 18, }}>10.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ borderWidth: 0.7, borderColor: '#fff', borderRadius: 5, paddingVertical: 3, paddingHorizontal: 28 }}>
                            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Deposit</Text>
                            <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>5.00</Text>
                        </View>
                        <View style={{ borderWidth: 0.7, borderColor: '#fff', borderRadius: 5, paddingVertical: 3, paddingHorizontal: 28 }}>
                            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Winning</Text>
                            <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>0.00</Text>
                        </View>
                        <View style={{ borderWidth: 0.7, borderColor: '#fff', borderRadius: 5, paddingVertical: 3, paddingHorizontal: 28 }}>
                            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Bouns</Text>
                            <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>0.00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <View>
                            <Text style={{ color: '#000', fontSize: 16 }}>Recent Transactions</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ color: '#000', backgroundColor: '#efd2d2ab', padding: 2, paddingHorizontal: 8, borderRadius: 4 }}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5,marginBottom:10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                                <Text style={{ color: '#000', fontSize: 15, }}>10.00</Text>
                            </View>
                            <Text style={{ color: '#719e6c', fontSize: 12 }}>CARDITIS</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#719e6c', fontSize: 11 }}>Deposit.5.00,winning.0.00,Bouns.0.00</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>Rewaed 10 coin for successful sinup !!</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#000', fontSize: 11 }}>08-01-23</Text>
                        </View>
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
