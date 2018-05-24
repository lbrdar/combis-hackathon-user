import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator
} from "react-navigation";

import { Home, Account, Donation, Donations, Feedback, Inbox, Questionnaires, Message } from "../screens";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const SignedIn = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Welcome",
      headerStyle
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      title: "My Profile",
      headerStyle
    }
  },
  Donations: {
    screen: Donations,
    navigationOptions: {
      title: "My Donations",
      headerStyle
    }
  },
  Donation: {
    screen: Donation,
    navigationOptions: {
      headerStyle
    }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      title: "Give Feedback",
      headerStyle
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      title: "My Inbox",
      headerStyle
    }
  },
  Message: {
    screen: Message,
    navigationOptions: {
      headerStyle
    }
  },
  Questionnaires: {
    screen: Questionnaires,
    navigationOptions: {
      title: "Available questionnaires",
      headerStyle
    }
  }
});

export default SignedIn;