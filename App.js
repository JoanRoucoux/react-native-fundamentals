import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Video } from './app/views/Video.js';
import { VideoDetails } from './app/views/VideoDetails.js';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Lessons" component={Video} />
      <Stack.Screen name="VideoDetails" component={VideoDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
