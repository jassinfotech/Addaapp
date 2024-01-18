import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIco from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';

import lodoImage from '../image/logo.png';

const Signup = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [inviteCode, setInviteCode] = useState('');

    const handleSignUp = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Number:', number);
        console.log('Invite Code:', inviteCode);

    };

    return (
        <View style={styles.container}>
            <View>
                <Image source={lodoImage} style={{ width: 250, height: 250, alignSelf: 'center' }} />
            </View>
            <Text style={styles.title}>Create an account</Text>

            <View style={styles.inputContainer}>
                <FontAwesomeIcon name="user" size={20} color="#fff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    autoCapitalize="words"
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesomeIco name="mail" size={20} color="#fff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
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
            <View style={styles.inputContainer}>
                <FontAwesomeIco name="share" size={20} color="#fff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Invite code (optional)"
                    autoCapitalize="words"
                    onChangeText={(text) => setInviteCode(text)}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                    <View>
                        <Text>please check</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                    <View>
                        <Text>please check</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                <Text>EXISTING USER ? <TouchableOpacity onPress={() => navigation.navigate("Signin")} style={{ top: 10 }}><Text style={{ color: '#BA1E1E', top: 4, fontSize: 16 }} >Login Now</Text></TouchableOpacity></Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            <View></View>
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
        color: '#fff'
    },
    input: {
        width: '80%',
        height: 40,
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignSelf:'center',
        paddingHorizontal:40,
        paddingVertical:10
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAliagn: 'center',

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
});

export default Signup;
