import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/Entypo';
import Iconst from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import freefire from '../image/freefire.png';
import pubg from '../image/pubg.png';
import callduty from '../image/callduty.png';

const Support = ({ navigation }) => {


  return (
    <View style={[styles.background,]}>
      <Appbar.Header style={{ backgroundColor: "#BA1E1E", flexDirection: 'row' }} >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ paddingRight: 8 }}>
              <Text> <Icon size={27} name="reorder-three-outline" color={'#fff'} /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginLeft: 15, backgroundColor: '#e84649', padding: 7, borderRadius: 7,paddingHorizontal:12}}>
              <View style={{ flexDirection: 'row' }}>
                <Text> <Iconstar size={16} name="wallet" color={'#fff'} /></Text>
                <Text style={{ marginHorizontal: 5, marginTop: 2 }}> <Iconst size={16} name="rupee" color={'#fff'} /></Text>
                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>10</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
           
            <TouchableOpacity onPress={() => navigation.navigate("News")} style={{ width: "auto", alignItems: "flex-end", marginRight: 10, marginLeft: 15 }}>
              <Text style={{ paddingTop: 5 }}><Ionicons size={40} name="user" color={'#fff'} /> </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Appbar.Header>

      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={freefire} style={styles.callduty} />
          <Image source={pubg} style={styles.callduty} />
          <Image source={callduty} style={styles.callduty} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={freefire} style={styles.callduty} />
          <Image source={pubg} style={styles.callduty} />
          <Image source={callduty} style={styles.callduty} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={freefire} style={styles.callduty} />
          <Image source={pubg} style={styles.callduty} />
          <Image source={callduty} style={styles.callduty} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={freefire} style={styles.callduty} />
          <Image source={pubg} style={styles.callduty} />
          <Image source={callduty} style={styles.callduty} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image source={freefire} style={styles.callduty} />
          <Image source={pubg} style={styles.callduty} />
          <Image source={callduty} style={styles.callduty} />
        </View>

      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    marginHorizontal: 10
  },
  callduty: {
    width: "32%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10
  },

});

export default Support;