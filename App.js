// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tabs from './components/Tabs';
import Wallet from './components/Wallet';
import Payment from './components/Payment';
import Addmoney from './components/Addmoney';
import Withrow from './components/Withrow';
import WithrowHistory from './components/WithrowHistory';
import Deposit from './components/Deposit';
import MyReferrals from './components/MyReferrals';
import Settings from './components/Settings';
import MyProfile from './components/MyProfile';
import ResponsibleGaming from './components/ResponsibleGaming';
import Stats from './components/Stats';
import Lodoking from './components/Lodoking';
import Contested from './components/Contested';
import Errorscreen from './components/Errorscreen';
import SignIn from './components/Signin';
import Signup from './components/Signup';
import OTPPage from './components/OTPPage';
import { Alert, StatusBar } from 'react-native';
import Loader from './components/Loader';


const Stack = createNativeStackNavigator();

const App = () => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const retrieveToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                console.log(storedToken, '-------==');
                setToken(storedToken);
            } catch (error) {
                console.error('Error retrieving token:', error);
            } finally {
                setIsLoading(false);
            }
        }; 

        retrieveToken();
    }, []);
    if (isLoading) {
        return <Loader/>;
    }
    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'} animated={true} translucent={true} backgroundColor="transparent" />
            <Stack.Navigator initialRouteName={token ? "Tabs" : "SignIn"}>
                {token ? (
                    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                ) : (<>
                    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <Stack.Screen name="OTPPage" component={OTPPage} options={{ headerShown: false }} />
                </>)}
                <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
                <Stack.Screen name="Addmoney" component={Addmoney} options={{ headerShown: false }} />
                <Stack.Screen name="Withrow" component={Withrow} options={{ headerShown: false }} />
                <Stack.Screen name="WithrowHistory" component={WithrowHistory} options={{ headerShown: false }} />
                <Stack.Screen name="Deposit" component={Deposit} options={{ headerShown: false }} />
                <Stack.Screen name="MyReferrals" component={MyReferrals} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
                <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
                <Stack.Screen name="ResponsibleGaming" component={ResponsibleGaming} options={{ headerShown: false }} />
                <Stack.Screen name="Stats" component={Stats} options={{ headerShown: false }} />
                <Stack.Screen name="Lodoking" component={Lodoking} options={{ headerShown: false }} />
                <Stack.Screen name="Contested" component={Contested} options={{ headerShown: false }} />
                <Stack.Screen name="Errorscreen" component={Errorscreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
