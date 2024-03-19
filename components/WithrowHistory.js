import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';


const WithrowHistory = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
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
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Withrow History</Text>
                        </View>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text style={{ color: '#fff', fontSize: 17 }}>Winning</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <Text style={{ marginTop: 4 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3 }}>10.00</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingTop:10,paddingBottom:170,marginHorizontal:10}}>
             <ScrollView>
             <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 0.7, borderColor: '#000', padding: 10, borderRadius: 5, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ marginTop: 1 }}> <Iconst size={14} name="rupee" color={'#000'} /></Text>
                            <Text style={{ color: '#000', fontSize: 15, }}>100</Text>
                        </View>
                        <Text style={{ color: '#719e6c', fontSize: 12 }}>success</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#719e6c', fontSize: 11 }}>Orderid: Order_745j2x7swg</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>Topup</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#000', fontSize: 11 }}>08-01-23 12:4pm</Text>
                    </View>
                </View>
             </ScrollView>
            </View>
            <TouchableOpacity style={styles.bottomBox}>
                    <Text style={{ color: '#fff',fontSize:13,fontWeight:'400' }}>CHECK MANUAL WITHRAW History</Text>
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
        bottom: 0,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

});

export default WithrowHistory