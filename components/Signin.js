import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomekey from 'react-native-vector-icons/FontAwesome6';
import lodoImage from '../image/logo.png';
import LinearGradient from 'react-native-linear-gradient';
import { signIn } from './authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'
const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('')


    useEffect(() => {
        valueCheck();
    }, [value]);
    const valueCheck = () => {
        const trimmedValue = value.trim();
        if (trimmedValue.length === 10 && /^\d+$/.test(trimmedValue)) {
            setType('mobile');
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
            setType('email');
        } else {
            setType('unknown');
        }
    };

    const handleSignIn = async () => {
        console.log('value:', value);
        valueCheck();
        try {
            const response = await signIn(value, password, type);
            console.log('---------------------', response);
            if (response.status === 'success') {
                console.log('User signed up successfully!', response);
                await AsyncStorage.setItem('token', response.token)
                RNRestart.Restart()
                navigation.navigate('Home');
            } else {
                console.error('Error signing up:', response);
                setError(response.message || 'An error occurred during signin');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Invalid name, email, or mobile. Please try again.');
        }
    };


    return (
        <ImageBackground source={require('../image/background.png')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View>
                    <Image source={lodoImage} style={{ width: 180, height: 180, alignSelf: 'center' }} />
                </View>
                <Text style={styles.title}>Sign In</Text>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon name="envelope" size={20} color="#fff" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number or Email"
                        autoCapitalize="none"
                        onChangeText={(value) => setValue(value)}
                        placeholderTextColor={'#b8b8b8'}
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomekey name="key" size={20} color="#fff" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={!showPassword}
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
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <LinearGradient
                    colors={['#590000', '#BA0000', '#ff0000']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    borderWidth={1}
                    style={styles.button}
                >
                    <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <GoogleIcon name="google" size={35} color="#fff" style={styles.GoogleIcon} />
                    <GoogleIco name="facebook-with-circle" size={35} color="#fff" style={styles.GoogleIcon} />
                </View> */}
                <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                    <Text style={{ fontWeight: '400', color: '#fff' }}>New User ? <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ top: 10 }}><Text style={{ color: '#fff', top: 4, fontSize: 16, fontWeight: "600" }} >Create an account</Text></TouchableOpacity></Text>
                </View>
            </View>
        </ImageBackground>
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
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        color: '#fff',
    },
    button: {
        borderRadius: 50,
        alignSelf: 'center',
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderWidth: 0,
        width: "100%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700'
    },
    GoogleIcon: {
        marginHorizontal: 10,
        marginVertical: 15,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
        textAlign: 'center'
    }
});

export default Signin;
