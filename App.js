import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { Video } from './app/views/Video.js';
import { VideoDetails } from './app/views/VideoDetails.js';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';
import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';
import { About } from './app/views/About.js';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Lessons" component={Video} />
      <Stack.Screen name="VideoDetails" component={VideoDetails} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Finish" component={Finish} />
      <Stack.Screen name="About" component={About} />
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
