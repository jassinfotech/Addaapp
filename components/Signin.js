import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import GoogleIco from 'react-native-vector-icons/Entypo';
import lodoImage from '../image/logo.png';

const Signin = () => {
    const navigation = useNavigation();
    const [number, setNumber] = useState('');

    const handleSignIn = () => {
        console.log('Number:', number);
    };

    return (
        <View style={styles.container}>

            <View>
                <Image source={lodoImage} style={{ width: 250, height: 250, alignSelf: 'center' }} />
            </View>
            <Text style={styles.title}>Sign In</Text>

            <View style={styles.inputContainer}>
                <FontAwesomeIcon name="phone" size={20} color="#fff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    onChangeText={(number) => setNumber(number)}
                />
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("OTPPage"); handleSignIn(); }} style={styles.button}>

                <Text style={styles.buttonText}>Sand OTP</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <GoogleIcon name="google" size={40} color="#fff" style={styles.GoogleIcon} />
                <GoogleIco name="facebook-with-circle" size={40} color="#fff" style={styles.GoogleIcon} />
            </View>
            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                <Text>NEW USER ? <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ top: 10 }}><Text style={{ color: '#BA1E1E', top: 4, fontSize: 16 }} >create an account</Text></TouchableOpacity></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    icon: {
        marginRight: 10,
    },
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        paddingHorizontal: 40,
        paddingVertical: 10,
        marginVertical: 10
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
    GoogleIcon: {
        marginHorizontal: 15,
        marginVertical: 10
    }
});

export default Signin;
