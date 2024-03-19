import React, { useState } from 'react';
import { signUp } from './authService';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, AsyncStorage } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomekey from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIco from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import lodoImage from '../image/logo.png';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUp(name, email, mobile, password);
            console.log(response, '---------------------')

            if (response.status === 'success') {
                console.log('User signed up successfully!', response);
                navigation.navigate("OTPPage", response);
            } else {
                console.error('Error signing up:', response);
                setError(response.message || 'An error occurred during signup');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Invalid name, email, or mobile. Please try again.');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <ImageBackground source={require('../image/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View>
                    <Image source={lodoImage} style={{ width: 180, height: 180, alignSelf: 'center', }} />
                </View>
                <Text style={styles.title}>Create an account</Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon name="user" size={20} color="#fff" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        autoCapitalize="words"
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={'#b8b8b8'}
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
                        placeholderTextColor={'#b8b8b8'}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon name="phone" size={20} color="#fff" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone mobile"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        onChangeText={(mobile) => setMobile(mobile)}
                        placeholderTextColor={'#b8b8b8'}
                        maxLength={10}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomekey name="key" size={20} color="#fff" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        onChangeText={(password) => setPassword(password)}
                        placeholderTextColor={'#b8b8b8'}

                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <FontAwesomeIcon
                            name={showPassword ? 'eye' : 'eye-slash'}
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>

                </View>
                {/* <View style={styles.inputContainer}>
                <FontAwesomeIco name="share" size={20} color="#fff" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Invite code (optional)"
                    autoCapitalize="words"
                    onChangeText={(text) => setInviteCode(text)}
                     placeholderTextColor={'#b8b8b8'}
                />
            </View> */}
                {/* <View>
                    <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                        <CheckBox
                            value={isChecked}
                            onValueChange={handleCheckboxChange}
                        />

                        <View>
                            <Text style={{ fontSize: 17, marginTop: 4, color: '#fff', fontWeight: '300' }}>Please check</Text>
                        </View>
                    </View>
                </View> */}
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <LinearGradient
                    colors={['#590000', '#BA0000', '#ff0000']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    borderWidth={1}
                    style={styles.button}
                >

                    <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                    <Text style={{ fontWeight: '400', color: '#fff' }}>Existtng User ? <TouchableOpacity onPress={goBack} style={{ top: 10 }}><Text style={{ color: '#fff', top: 4, fontSize: 16, fontWeight: "600" }}  >Login Now</Text></TouchableOpacity></Text>
                </View>

                <View>

                </View>
            </View>
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginHorizontal: 20,
        borderRadius: 20
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#fff',
        fontWeight: '600'
    },
    input: {
        width: '80%',
        height: 40,
        color: '#fff'
    },
    button: {
        borderRadius: 50,
        alignSelf: 'center',
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderWidth: 0,
        width: "100%",
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderColor: '#fff',
        borderWidth: 1.3,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    icon: {
        marginRight: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center'
    }
});

export default Signup;
