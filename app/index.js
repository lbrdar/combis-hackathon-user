import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { createRootNavigator } from './navigators';
import { Loading } from './common';
import { isSignedIn } from './utils/auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      loading: false
    };

    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  getChildContext() {
    return {
      setLoading: this._setLoading
    };
  }

  _setLoading = loading => this.setState({ loading });

  render() {
    const { checkedSignIn, signedIn, loading } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <View style={{ flex: 1 }}>
        <Layout />
        {loading && <Loading />}
      </View>
    );
  }
}

App.childContextTypes = {
  setLoading: PropTypes.func
};

export default () => <App />;
