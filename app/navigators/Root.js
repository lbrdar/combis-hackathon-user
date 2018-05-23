import React from "react";
import {
  createSwitchNavigator
} from "react-navigation";
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';

const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export default createRootNavigator;