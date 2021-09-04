import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Preload from './src/pages/preload'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App(){
return(

      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='preload' component={Preload} /> 
    </Stack.Navigator>
      </NavigationContainer>

  );
}


