import React, { useState } from 'react';
import { Verification } from './authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
import lodoImage from '../image/otpimage.png';
import LinearGradient from 'react-native-linear-gradient';

const OTPPage = ({ route }) => {
  console.log('----------', route.params)
  const navigation = useNavigation();
  const { mobile, email } = route.params
  const goBack = () => {
    navigation.goBack();
  };
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    if (otp.trim().length === 6) {
      try {
        const response = await Verification(otp, email, mobile);
        console.log(response, '---------------------')
        if (response.status === 'success') {
          await AsyncStorage.setItem('token', response.token)
          RNRestart.Restart()
          navigation.navigate('Home');
        } else {
          console.error('Error signing up:', response);
          setError(response.message || 'An error occurred during signup');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        setError('Invalid Otp. Please try again.');
      }
    } else {
      setError("Please enter a valid 6-digit phone otp.");
    }

  };
  const handleResendOTP = () => {
    console.log('otp:', otp);
  };

  return (
    <ImageBackground source={require('../image/background.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View>
          <Image source={lodoImage} style={{ width: 180, height: 180, alignSelf: 'center' }} />
        </View>
        <Text style={{ marginVertical: 10, color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '600' }}>OTP Verification</Text>
        <Text style={{ marginBottom: 10, color: '#fff', fontSize: 15, textAlign: 'center' }}>Enter the 6 digit code</Text>
        <Text style={{ marginBottom: 10, color: '#fff', fontSize: 20, textAlign: 'center' }}>OTP: {route.params.OTP}</Text>
        <OTPTextView
          tintColor="#fff"
          inputCount={6}
          keyboardType="numeric"
          textInputStyle={styles.input}
          handleTextChange={(text) => setOtp(text)}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <LinearGradient
          colors={['#590000', '#BA0000', '#ff0000']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          borderWidth={1}
          style={styles.button}
        >
          <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resendButtonText}>Resend OTP</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: '#fff' }}>OR</Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={styles.resendButtonText}>Change Number</Text>
          </TouchableOpacity>
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
  input: {
    width: '12%',
    height: 50,
    marginBottom: 40,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    margin: 2,
    borderRadius: 3,
    alignSelf: 'center'
  },
  button: {
    borderRadius: 50,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderWidth: 0,
    width: "100%"
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700'
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontWeight: '600'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center'
  }
});

export default OTPPage;
