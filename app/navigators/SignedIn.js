import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Home, Account, Donation, Donations, Feedback, Inbox, Questionnaire, Questionnaires, Message } from "../screens";

const SignedIn = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Welcome"
    }
  },

  Account: {
    screen: Account,
    navigationOptions: {
      title: "My Profile"
    }
  },

  Donations: {
    screen: Donations,
    navigationOptions: {
      title: "My Donations"
    }
  },
  Donation: {
    screen: Donation
  },

  Feedback: {
    screen: Feedback,
    navigationOptions: {
      title: "Give Feedback"
    }
  },

  Inbox: {
    screen: Inbox,
    navigationOptions: {
      title: "My Inbox"
    }
  },
  Message: {
    screen: Message
  },

  Questionnaire: {
    screen: Questionnaire
  },
  Questionnaires: {
    screen: Questionnaires,
    navigationOptions: {
      title: "Available questionnaires"
    }
  }
},
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#ff2121'
      },
      headerTitleStyle: {
        color: '#eeeeee'
      },
      headerBackTitleStyle: {
        color: '#eeeeee'
      },
      headerBackImage: (
        <Icon
          name={Platform.OS === 'android' ? 'arrow-left' : 'chevron-left'}
          color="#eeeeee"
          size={25}
          style={{ margin: 5 }}
        />
      )
    }
  });

export default SignedIn;