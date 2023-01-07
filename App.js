import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RootStackScreen from './screen/RootStackScreen';


const AppStack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen/>
     { /*<AppStack.Navigator headerShown="false" >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name="Login" component={LoginScreen}/>
        <AppStack.Screen name="Profile" component={ProfileScreen}/>
       <AppStack.Screen name="Signup" component={SignupScreen}/>
        
      

  //</AppStack.Navigator>*/}
    </NavigationContainer>
  )
}

export default App;
