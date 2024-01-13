import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Icodot from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const notificationData = [
    {
        title: 'Stats',
        content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
    },
    {
        title: 'Stats',
        content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
    },
    {
        title: 'Stats',
        content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
    },
    {
        title: 'Stats',
        content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
    },  {
        title: 'Stats',
        content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
    },
     
    
  
   

];
const Stats = () => {
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
                            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 15 }}>Stats</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.body}>
                <View>
                    {notificationData.map((notification, index) => (
                        <View key={index} style={{ backgroundColor: '#BA1E1E', padding: 15, marginTop: 10, marginBottom: 5, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 17 }}>{notification.title}</Text>
                                    <Text style={{ color: '#fff', fontSize: 13.5 }}>{notification.content} {notification.content.substring(0, 10) + ' .....'}</Text>
                                </View>
                             
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    body:{
        marginHorizontal:10
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


export default Stats;
