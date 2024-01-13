import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MujresComponent = ({ title }) => {
  return (
    <View style={styles.mujresContainer}>
      <Text style={styles.mujresTitle}>{title}</Text>
      <Text>Mujre 1</Text>
      <Text>Mujre 2</Text>
    
    </View>
  );
};

const TabsScreens = () => {
  const [selectedTab, setSelectedTab] = useState('Mujres1');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View>
      <View style={styles.tabsContainer}>
      <TouchableOpacity
  style={[styles.tabButton, selectedTab === 'Mujres1' && styles.activeTab]}
  onPress={() => handleTabPress('Mujres1')}
>
  <Text style={selectedTab === 'Mujres1' ? styles.activeTabText : styles.tabButtonText}>
    Mujres 1
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.tabButton, selectedTab === 'Mujres2' && styles.activeTab]}
  onPress={() => handleTabPress('Mujres2')}
>
  <Text style={selectedTab === 'Mujres2' ? styles.activeTabText : styles.tabButtonText}>
    Mujres 2
  </Text>
</TouchableOpacity>

      </View>
      <View style={styles.tabContent}>
        {selectedTab === 'Mujres1' && <MujresComponent title="Mujres 1" />}
        {selectedTab === 'Mujres2' && <MujresComponent title="Mujres 2" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
    },
    tabButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#BA1E1E',
    },
    activeTab: {
      backgroundColor: '#BA1E1E',
    },
    activeTabText: {
      color: '#fff', 
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center',
    },
    tabButtonText: {
      color: '#BA1E1E',
      fontWeight: 'bold',
      fontSize: 12,
      textAlign: 'center',
    },
    tabContent: {
      flex: 1,
      padding: 20,
    },
    mujresContainer: {
      marginTop: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#BA1E1E',
      borderRadius: 8,
    },
    mujresTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  

  

export default TabsScreens;
