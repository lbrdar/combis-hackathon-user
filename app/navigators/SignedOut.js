import React from "react";
import {
  createTabNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Signup, Login } from "../screens";

const SignedOut = createTabNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign Up",
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="person-add" size={30} color={focused ? tintColor : "#eeeeee"} style={{ margin: 5 }}
        />
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Log In",
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="person" size={30} color={focused ? tintColor : "#eeeeee"} style={{ margin: 5 }} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: '#eeeeee',
    tabStyle: {
      backgroundColor: '#ff2222',
    },
    style: {
      backgroundColor: '#ff2222',
    },
  },
});

export default SignedOut;