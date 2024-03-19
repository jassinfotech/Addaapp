import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ClassicScreen from './ClassicScreen';

const Imagetabs = () => {
  const [selectedTab, setSelectedTab] = useState('Classic');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const renderScreen = () => {
    switch (selectedTab) {
      case 'Classic':
        return <ClassicScreen/>;
      case 'Popular':
        return <View style={styles.tabContent}><Text>Popular Screen</Text></View>;
      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Classic' && styles.activeTab]}
          onPress={() => handleTabPress('Classic')}
        >
          <Text style={selectedTab === 'Classic' ? styles.activeTabText : styles.tabButtonText}>
            Classic
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Popular' && styles.activeTab]}
          onPress={() => handleTabPress('Popular')}
        >
          <Text style={selectedTab === 'Popular' ? styles.activeTabText : styles.tabButtonText}>
            Popular
          </Text>
        </TouchableOpacity>
      </View>

      {/* Render the selected screen */}
      {renderScreen()}
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
    paddingVertical: 12,
    paddingHorizontal: 72,
    borderRadius: 20,
    backgroundColor: '#ddd'
  },
  activeTab: {
    backgroundColor: '#BA1E1E',
    borderColor: '#BA1E1E',
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
  mujresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});




export default Imagetabs;
