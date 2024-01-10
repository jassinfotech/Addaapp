import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Lodo from './Lodo';

const FreeFireComponent = () => {
    return (
        <View>
        <Lodo/>
    </View>
    );
};

const LodoComponent = () => {
    return (
        <View>
            <Lodo/>
        </View>
    );
};

const FanBattleComponent = () => {
    return (
        <View>
        <Lodo/>
    </View>
    );
};

const MoreComponent = () => {
    return (
        <View>
        <Lodo/>
    </View>
    );
};

const TabsScreens = () => {
    const [selectedTab, setSelectedTab] = useState('Frox');
    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };
    const renderTabContent = () => {
        switch (selectedTab) {
            case 'FreeFire':
                return <FreeFireComponent />;
            case 'Lodo':
                return <LodoComponent/>;
            case 'FanBattle':
                return <FanBattleComponent />;
            case 'More':
                return <MoreComponent />;
            default:
                return null;
        }
    };
    return (
        <View>
            <View style={styles.tabsContainer}>

                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Free Fire' && styles.activeTab]}
                    onPress={() => handleTabPress('FreeFire')}
                >
                    <Text style={styles.tabButtonText}>Free Fire</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Lodo' && styles.activeTab]}
                    onPress={() => handleTabPress('Lodo')}
                >
                    <Text style={styles.tabButtonText}>Lodo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'FanBattle' && styles.activeTab]}
                    onPress={() => handleTabPress('FanBattle')}
                >
                    <Text style={styles.tabButtonText}>Fan Battle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'More' && styles.activeTab]}
                    onPress={() => handleTabPress('More')}
                >
                    <Text style={styles.tabButtonText}>More</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
                {renderTabContent()}
            </View>
        </View>
    )
}

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
        width:85
    },
    activeTab: {
        backgroundColor: '#BA1E1E',
        color:'#fff'
    },
    tabButtonText: {
        color: '#BA1E1E',
        fontWeight: 'bold',
        fontSize:12,
        textAlign:'center'
    },
    tabContent: {
        flex: 1,
        padding: 20, 
    },
});
export default TabsScreens