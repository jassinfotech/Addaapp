import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, ScrollView, TouchableOpacity, Image,  } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/Entypo';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import lodoImage from '../image/lodoking.png';
import rummyImage from '../image/rummy.jpg';
import freefire from '../image/freefire.png';
import pubg from '../image/pubg.png';
import callduty from '../image/callduty.png';
import knife from '../image/knife.png';
import word from '../image/word.png';
import Quiz from '../image/quiz.png';
import clane from '../image/clane.png';
import cricket from '../image/cricket.png';
import call from '../image/call.png';
import freefires from '../image/freefires.png';
import Sidescreen from './Sidescreen';
import { useNavigation } from '@react-navigation/native';
import Sliderscreen from './Sliderscreen';
import { getData } from './helperFile';

const Home = ({ navigation }) => {
  const[currentb,setCurrentb]=useState('');
  const drawer = useRef(null);
  const [drawerPosition] = useState('left');

  const handleGetuserwallet = async () => {
    try {
        const response = await getData('user/user-wallet');
       console.log('get-user-wallet------------',response)
       setCurrentb(response.WalletBalance)
    } catch (error) {
        console.error('Get request error:', error);
    }
};


  const navigationView = () => (
    <View style={{ flex: 1, backgroundColor: '#BA1E1E', }}>
      <Sidescreen />
    </View>
  );
  useEffect(() => {
    handleGetuserwallet();
}, []);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition === 'left' ? DrawerLayoutAndroid.positions.Left : DrawerLayoutAndroid.positions.Right}
      renderNavigationView={navigationView}
    >
      <View style={[styles.background,]}>
        <Appbar.Header style={{ backgroundColor: "#BA1E1E", flexDirection: 'row' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => drawer.current?.openDrawer()}>
                <Text> <Icon size={27} name="reorder-three-outline" color={'#fff'} /></Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Wallet")} style={{ width: "auto", alignItems: "flex-end", marginLeft: 15, backgroundColor: '#e84649', padding: 7, borderRadius: 7, paddingHorizontal: 12 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text> <Iconstar size={16} name="wallet" color={'#fff'} /></Text>
                  <Text style={{ marginHorizontal: 5, marginTop: 2 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                  <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>{currentb}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity onPress={() => navigation.navigate("MyProfile")} style={{ width: "auto", alignItems: "flex-end", marginRight: 10, marginLeft: 15 }}>
                <Text style={{ paddingTop: 5 }}><Ionicons size={30} name="user-circle" color={'#fff'} /> </Text>
              </TouchableOpacity>

            </View>
          </View>
        </Appbar.Header>
        {/* <ImageBackground
          source={require('../image/background1.png')}
          style={styles.backgroundImage}
        >
        </ImageBackground> */}
        <ScrollView style={{ backgroundColor: '#0a1017' }}>
          <View>
            <Sliderscreen />
          </View>
          <View style={styles.container}>
            <View>
              <Text style={styles.heding}>GAME</Text>
            </View>
            <View style={styles.Images}>
              <TouchableOpacity onPress={() => navigation.navigate("Lodoking")} >
                <Image source={lodoImage} style={styles.logoImage} />

              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={rummyImage} style={styles.logoImage} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.heding}>BATTEL GROUND</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity>
                <Image source={freefire} style={styles.callduty} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={pubg} style={styles.callduty} />

              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={callduty} style={styles.callduty} />

              </TouchableOpacity>
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity>
                <Image source={freefire} style={styles.callduty} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={pubg} style={styles.callduty} />

              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={callduty} style={styles.callduty} />

              </TouchableOpacity>
            </View> */}
            <View>
              <Text style={styles.heding}>ESPORTS</Text>
            </View>
            <View style={styles.Images}>
              <TouchableOpacity >
                <Image source={freefires} style={styles.logoImages} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={freefire} style={styles.logoImages} />
              </TouchableOpacity>
            </View>
            <Text style={styles.heding}>GAME</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <TouchableOpacity>
                <Image source={knife} style={styles.knife} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={word} style={styles.knife} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Quiz} style={styles.knife} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <TouchableOpacity>
                <Image source={clane} style={styles.knife} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={call} style={styles.knife} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={knife} style={styles.knife} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.heding}>GAME</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity>
                <Image source={freefire} style={styles.callduty} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={pubg} style={styles.callduty} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={callduty} style={styles.callduty} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.heding}>GAME</Text>
            </View>
            <View style={styles.Image}>
              <TouchableOpacity >
                <Image source={cricket} style={styles.logoImages} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={rummyImage} style={styles.logoImages} />
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View >
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    marginHorizontal: 10,

  },
  Images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },

  logoImage: {
    width: 180,
    height: 130,
    borderRadius: 10,
    marginTop: 10
  },
  logoImages: {
    width: 183,
    height: 110,
    borderRadius: 10,
    marginTop: 10
  },
  callduty: {
    width: 115,
    height: 120,
    borderRadius: 20,
    marginTop: 10
  },
  knife: {
    width: 120,
    height: 100,
    borderRadius: 20,
    marginTop: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    color: '#000',
    fontWeight: '500',
    marginVertical: 5,
    textAlign: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  heding: {
    marginTop: 10,
    color: '#fff',
    fontWeight: '600',
    fontSize: 12
  }
});

export default Home;
