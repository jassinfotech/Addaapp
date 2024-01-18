import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lodoImage from '../image/logo.png';


const OTPPage = () => {
    const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']); 
  const [timer, setTimer] = useState(60); 
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const inputRefs = Array.from({ length: 6 }, () => React.createRef());

  const handleResendOTP = () => {
    setTimer(60);
    setIsTimerRunning(true);
    setOtp(['', '', '', '', '', '']); 
    inputRefs[0].current.focus(); 
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join(''); 
    console.log('Entered OTP:', enteredOTP);
  };

  const handleOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input box automatically
    if (index < 5 && value !== '') {
      inputRefs[index + 1].current.focus();
    }

    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
         <View>
                <Image source={lodoImage} style={{ width: 250, height: 250, alignSelf: 'center' }} />
            </View>
      <Text style={{marginVertical:10,color:'#fff',fontSize:15,textAlign:'center'}}>Enter the 6 digit code send to</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpInputChange(index, text)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>
      {/* <Text style={styles.timerText}>Time remaining: {timer} seconds</Text> */}
    <View style={{flexDirection:'row',justifyContent:'center' ,marginTop:10}}>
    <TouchableOpacity  onPress={handleResendOTP}>
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
      <Text style={{fontSize:16,color:'#fff'}}>OR</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}  >
        <Text style={styles.resendButtonText}>Change Number</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  input: {
    width: '26%',
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    margin:2,
    borderRadius:3
  },
  timerText: {
    marginBottom: 20,
    color: '#fff',
  },
  resendButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal:6,
    borderBottomWidth:1,
    borderBottomColor:'#fff'
  },
  verifyButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignSelf:'center',
    paddingHorizontal:40,
    paddingVertical:10,
    marginBottom:10
  },
  verifyButtonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OTPPage;
