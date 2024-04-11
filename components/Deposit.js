import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Deposit = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#BA1E1E', paddingTop: 25 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>Deposit LImit</Text>
                        </View>
                    </View>
                </View>

            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ backgroundColor: '#BA1E1E', padding: 15, marginVertical: 10, paddingRight: 90, borderRadius: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 16, }}>Change Limit</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 4 }}>You can only change you daily limit
                            once in 24 hours.</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 7 }}>You have Limit of</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 7 }}>
                            <Text style={{ marginTop: 4 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                            <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3 }}>80000</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#BA1E1E', padding: 15, marginVertical: 10, paddingRight: 90, borderRadius: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 16, }}>Your Monthly Limit </Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 4 }}>You  are allowed up to 20 times of daily
                            Limit per month</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 7 }}>
                            <Text style={{ marginTop: 4 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                            <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3 }}>180000</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#BA1E1E', padding: 15, marginVertical: 10, paddingRight: 90, borderRadius: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 16, }}>Change Limit</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 4 }}>You can only change you daily limit
                            once in 24 hours.</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginTop: 7 }}>You have Limit of</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 7 }}>
                            <Text style={{ marginTop: 4 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                            <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3 }}>80000</Text>
                        </View>
                    </View>

                </View>
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


export default Deposit;
