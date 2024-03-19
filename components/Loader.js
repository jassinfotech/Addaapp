import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import lodoImage from '../image/logo.png';
import LottieView from 'lottie-react-native';
const Loader = () => {
  return (
    <ImageBackground source={require('../image/background.png')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <View>
            <Image source={lodoImage} style={{ width: 180, height: 180, alignSelf: 'center' }} />
          </View>
          {/* <LottieView
            source={require('../components/animation/Loder.json')}
            autoPlay
            loop={true}
            style={styles.Loder}
          /> */}
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#104373',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  Loder: {
    width: 220,
    height: 220,
  },
});

export default Loader;
