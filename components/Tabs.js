import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIco from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Gift from './Gift';
import Winners from './Winners';
import Support from './Support ';
import Notification from './Notification';
const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#BA1E1E',
                },
                tabBarStyle: {
                    elevation: 0,
                    paddingBottom: 5,
                    backgroundColor: '#BA1E1E',
                    height: 60,
                    borderTopWidth: 0.3,
                    borderColor: "#fff",
                },
                tabBarActiveTintColor: '#FE238C',
            })}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="home" style={focused ? styles.Activaddbtn : styles.addbtn} />
                        </View>


                }}
            />
            <Tab.Screen name="Gift" component={Gift}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIco name="gift-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                        </View>


                }}
            />

            <Tab.Screen name="Winners" component={Winners}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIco name="trophy-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                        </View>


                }}
            />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIco name="notifications-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                        </View>


                }}
            />
            <Tab.Screen name="Support" component={Support}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcon name="headset" style={focused ? styles.Activaddbtn : styles.addbtn} />
                        </View>


                }}
            />

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    addbtn: {
        color: '#fff',
        padding: 2,
        textAlign: 'center',
        paddingTop: 9,
        fontSize: 26,
    },

    Activaddbtn: {
        padding: 4,
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 7,
        fontSize: 30,
    },

    tabLabel: {
        color: '#fff',
        fontSize: 11,
        justifyContent: 'center'
    },
    activeTabLabel: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 11,
        top: 20,
    },
    icon: {
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        top: -22,
        width: '100%'

    },

});

export default Tabs