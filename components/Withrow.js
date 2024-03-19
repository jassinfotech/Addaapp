import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Paytm from '../image/Paytm.png';
import bank from '../image/bank.png';
import bhim from '../image/bhim.png';


const Withrow = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View>
            <View style={{ backgroundColor: '#BA1E1E',paddingTop:35 }}>
                <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text><Iconstar size={20} name="arrowleft" color={'#fff'} /></Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Withrow</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("WithrowHistory")} style={{ width: "auto", alignItems: "flex-end", backgroundColor: '#e84649', padding: 7, borderRadius: 7, paddingHorizontal: 12 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{}}>Withrow History</Text>
                            <Text style={{ marginHorizontal: 5, marginTop: 2 }}> <Iconst size={16} name="history" color={'#fff'} /></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginHorizontal: 10,marginVertical:10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ borderColor: '#000', borderWidth: 0.7, padding: 10, borderRadius: 9 }}>
                        <Image source={Paytm} style={{ width: 90, height: 50 }} />
                    </View>
                    <View style={{ borderColor: '#000', borderWidth: 0.7, padding: 10, borderRadius: 9 }}>
                        <Image source={bhim} style={{ width: 90, height: 50 }} />
                    </View>
                    <View style={{ borderColor: '#000', borderWidth: 0.7, padding: 10, borderRadius: 9 }}>
                        <Image source={bank} style={{ width: 80, height: 60,marginHorizontal:7 }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Withrow  