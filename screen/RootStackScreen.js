import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../components/Onboarding';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigator}) => (
    <RootStack.Navigator screenOptions={{header: () => null}}>
       
        
        <RootStack.Screen name='Onboarding' component={Onboarding}/>
       

       
        
    </RootStack.Navigator>
);

export default RootStackScreen;