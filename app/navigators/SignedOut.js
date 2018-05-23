import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createTabNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Signup, Login } from "../screens";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const SignedOut = createTabNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign Up",
      headerStyle,
      inactiveTintColor: "white",
      activeTintColor: "yellow",
      tabStyle: { backgroundColor: 'black' },
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="person-add" size={30} color={focused ? tintColor : "white"} style={{ margin: 5 }}
        />
          )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Log In",
      headerStyle,
      inactiveTintColor: "white",
      activeTintColor: "yellow",
      tabStyle: { backgroundColor: 'black' },
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="person" size={30} color={focused ? tintColor : "white"} style={{ margin: 5 }} />
      )

    }
  }
});

export default SignedOut;