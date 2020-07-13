import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

/* React Native Navigation
   Basic Navigation Stack */

const Stack = createStackNavigator();

const SampleApp = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions = {{
        headerShown : false
      }}
      /** Options or Settings that we want to apply to all screens, like header options, header customizarions */
      //  screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        
        /** Options that will be applied to this specific screen only */
        // options={{
        //   title: 'My home',
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen}
        /** We can pass our custom component to the header like this, Buttons, Images, or anything */
        //options={{ headerTitle: props => <LogoTitle {...props} /> }}
       />
    </Stack.Navigator>
  </NavigationContainer>
);

//console.disableYellowBox = true;

export default SampleApp;
