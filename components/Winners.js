import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, ScrollView, TouchableOpacity, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/Entypo';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import man from '../image/man.png';
import TabsScreens from './TabsScreens';
import Ionicon from 'react-native-vector-icons/EvilIcons';
import Sidescreen from './Sidescreen';


const Winners = ({ navigation }) => {
  const newDrawer = useRef(null);

  const navigationView = () => (
    <View style={{ flex: 1, backgroundColor: '#BA1E1E', }}>
      <Sidescreen />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={newDrawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <View style={[styles.background,]}>
        <Appbar.Header style={{ backgroundColor: "#BA1E1E", flexDirection: 'row' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => newDrawer.current?.openDrawer()}>
                <Text> <Icon size={27} name="reorder-three-outline" color={'#fff'} /></Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity onPress={() => navigation.navigate("MyProfile")} style={{ width: "auto", alignItems: "flex-end", marginRight: 10, marginLeft: 15 }}>
                <Text style={{ paddingTop: 5 }}><Ionicon size={40} name="user" color={'#fff'} /> </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <View style={{ backgroundColor: '#BA1E1E', paddingHorizontal: 30, paddingBottom: 30, borderBottomLeftRadius: 80, borderBottomRightRadius: 80 }}>
            <View style={{ alignSelf: 'center' }}>
              <Image source={man} style={{ width: 90, height: 90, borderColor: '#fff', borderWidth: 1, borderRadius: 50, alignSelf: 'center' }} />
              <Text style={{ color: '#fff', marginTop: 7, fontSize: 11 }}>1.happy</Text>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ color: '#fff', fontSize: 11 }}>won:</Text>
                <Text style={{}}> <Iconst size={11} name="rupee" color={'#fff'} /></Text>
                <Text style={{ color: '#fff', marginLeft: 3, fontSize: 11, marginTop: 2 }}>91323000</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Image source={man} style={{ width: 70, height: 70, borderColor: '#fff', borderWidth: 1, borderRadius: 50, alignSelf: 'center' }} />
                <Text style={{ color: '#fff', marginTop: 7, fontSize: 11 }}>2.shiv</Text>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ color: '#fff', fontSize: 11 }}>won:</Text>
                  <Text style={{}}> <Iconst size={12} name="rupee" color={'#fff'} /></Text>
                  <Text style={{ color: '#fff', marginLeft: 3, fontSize: 11, marginTop: 2 }}>613345000</Text>
                </View>
              </View>
              <View>
                <Image source={man} style={{ width: 70, height: 70, borderColor: '#fff', borderWidth: 1, borderRadius: 50, alignSelf: 'center' }} />
                <Text style={{ color: '#fff', marginTop: 7, fontSize: 11 }}>3.ravi</Text>
                <View style={{ flexDirection: 'row', }}>
                  <Text style={{ color: '#fff', fontSize: 11 }}>won:</Text>
                  <Text style={{}}> <Iconst size={12} name="rupee" color={'#fff'} /></Text>
                  <Text style={{ color: '#fff', marginLeft: 3, fontSize: 11, marginTop: 2 }}>31334500</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <TabsScreens />
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

});

export default Winners;
