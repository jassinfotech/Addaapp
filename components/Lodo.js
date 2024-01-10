import { View, Text, Image } from 'react-native';
import React from 'react';
import man from '../image/man.png';

const usersData = [
  {
    name: 'Ajay Muwel',
    wom: 56325,
    imageSource: man,
    number: 1,
  },
  {
    name: 'John Doe',
    wom: 78901,
    imageSource: man,
    number: 2,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 3,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 4,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 5,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 6,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 7,
  },
  {
    name: 'Jane Smith',
    wom: 45678,
    imageSource: man, 
    number: 8,
  },
];

const Lodo = () => {
  return (
    <View>
      {usersData.map((userData, index) => (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#ddd', padding: 10, borderRadius: 9,marginBottom:10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 8 }}>
              <Image source={userData.imageSource} style={{ width: 50, height: 50, borderColor: '#BA1E1E', borderWidth: 1, borderRadius: 50 }} />
            </View>
            <View>
              <Text style={{ color: '#000' }}>{userData.name}</Text>
              <Text style={{ color: '#719e6c' }}>wom: {userData.wom}</Text>
            </View>
          </View>
          <View>
            <Text style={{ color: '#000' }}>#{userData.number}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Lodo;
