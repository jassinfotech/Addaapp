import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid, ScrollView, TouchableOpacity, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/Entypo';
import Iconst from 'react-native-vector-icons/FontAwesome';
import Icodot from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import Sidescreen from './Sidescreen';
const notificationData = [
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },
  {
    title: 'Notification',
    content: 'It is a long established fact that a reader a page when looking at its layout. The point of using',
  },

];
const Notification = ({ navigation }) => {

  const drawer = useRef(null);
  const [drawerPosition] = useState('left');
  const navigationView = () => (
    <View style={{ flex: 1, backgroundColor: '#BA1E1E', }}>
      <Sidescreen />
    </View>
  );
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
          </View>
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}  style={{ width: "auto", alignItems: "flex-end", marginRight: 10, marginLeft: 15 }}>
              <Text style={{ paddingTop: 5 }}><Ionicons size={40} name="user" color={'#fff'} /> </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View>
          {notificationData.map((notification, index) => (
            <View key={index} style={{ backgroundColor: '#BA1E1E', padding: 10, marginTop: 10, marginBottom: 5, borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                  <Text style={{ color: '#fff', fontSize: 17 }}>{notification.title}</Text>
                  <Text style={{ color: '#fff' ,fontSize:13.5}}>{notification.content} {notification.content.substring(0, 10    ) + ' .....'}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{ paddingTop:2, }}><Icodot size={25} name="dots-vertical" color={'#fff'} /> </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
  lodoimae: {
    width: '49%',
    height: 130,
    borderRadius: 10,
    marginTop: 10
  },
  callduty: {
    width: "32%",
    height: 200,
    borderRadius: 10,
    marginTop: 10
  },
  knife: {
    width: '24%',
    height: 85,
    borderRadius: 10,
    marginTop: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

});

export default Notification;
