// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Tabs from './components/Tabs';
import Wallet from './components/Wallet';
import Payment from './components/Payment';
import Addmoney from './components/Addmoney';
import Withrow from './components/Withrow';
import WithrowHistory from './components/WithrowHistory';
import Deposit from './components/Deposit';
import MyReferrals from './components/MyReferrals';
import Settings from './components/Settings';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
                <Stack.Screen name="Addmoney" component={Addmoney} options={{ headerShown: false }} />
                <Stack.Screen name="Withrow" component={Withrow} options={{ headerShown: false }} />
                <Stack.Screen name="WithrowHistory" component={WithrowHistory} options={{ headerShown: false }} />
                <Stack.Screen name="Deposit" component={Deposit} options={{ headerShown: false }} />
                <Stack.Screen name="MyReferrals" component={MyReferrals} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
