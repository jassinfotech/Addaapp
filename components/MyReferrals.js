import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MyReferrals = () => {
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
                            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>My Referrals</Text>
                        </View>
                    </View>
                </View>

            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={{ backgroundColor: '#BA1E1E', padding: 15, marginVertical: 10, borderRadius: 15, height: 500 }}>
                        <Text style={{ color: '#fff', fontSize: 40, textAlign: 'center' }}>Refer & Earn</Text>
                        <Text style={{ color: '#fff', fontSize: 16, marginTop: 4, textAlign: 'center', textAlign: 'justify',  }}>Lorem ipsum, placeholder or dummy
                            text used in typesetting and graphic des
                            ign for previewing layouts. It features scrambled Latin text,
                            which emphasizes the design over content of the layout. It is the
                            standard placeholder text of the printing and publishing industries</Text>
                            <Text style={{ color: '#fff', fontSize: 16, marginTop: 4, textAlign: 'center', textAlign: 'justify',  }}>Lorem ipsum, placeholder or dummy
                            text used in typesetting and graphic des
                            ign for previewing layouts. It features scrambled Latin text,
                            which emphasizes the design over content of the layout. It is the
                            standard placeholder text of the printing and publishing industries</Text>
                        <TouchableOpacity style={{ bottom: 40, backgroundColor: '#fff', width: 80, paddingHorizontal: 15, paddingVertical: 4, alignSelf: 'flex-end', position: 'absolute', right: 25,borderRadius:10 }}>
                            <Text style={{ textAlign: 'center' }}><Iconstar size={40} name="arrowright" color={'#000'} /></Text>
                        </TouchableOpacity>

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


export default MyReferrals;
