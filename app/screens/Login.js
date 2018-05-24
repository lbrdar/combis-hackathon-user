import PropTypes from 'prop-types';
import React from 'react';
import { Button, ScrollView, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Input, Loading } from '../common/index';
import { saveToken } from "../utils/auth";

export default class Login extends React.Component {
  state = {
    email: '',
    pass: '',

    loading: false
  };

  _submit = () => {
    if(!this._isValid()) return;

    const params = {
      grant_type: 'password',
      username: this.state.email,
      password: this.state.pass
    };

    this.setState({ loading: true });
    fetch('https://363fcfa6.ngrok.io/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: Object.keys(params).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&'),
      method: 'POST'
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error('Request failed');
    })
      .then((res) => {
        saveToken(res);
        this.props.navigation.navigate('SignedIn');
      })
      .catch(() => {
        this.setState({ loading: false });
        alert('Something went wrong');
      });
  };

  _isValid = () => {
    const { email, pass } = this.state;

    if (!email || !pass) {
      alert('All fields are required');
      return false;
    }

    return true;
  };

  render() {
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Image source={require('../../assets/images/blood-donation.jpg')} style={styles.image} resizeMode="contain" />
          <Input
            autoFocus
            autoCapitalize="none"
            label="Email"
            onChange={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <Input
            autoCapitalize="none"
            secureTextEntry
            label="Password"
            onChange={(text) => this.setState({ pass: text })}
            value={this.state.pass}
          />
        </View>
        <Button title="Submit" onPress={this._submit} color="#ff2222" style={{ margin: 20 }} />
        {this.state.loading && <Loading />}
      </ScrollView>
    )
  }
}

Login.contextTypes = {
  setLoading: PropTypes.func
};

const styles = StyleSheet.create({
  scroll: {
    minHeight: Dimensions.get('window').height
  },
  scrollContent: {
    minHeight: Dimensions.get('window').height
  },
  container: {
    marginVertical: 30,
    marginHorizontal: 16,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 120,
    marginVertical: 20
  }
});