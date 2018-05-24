import PropTypes from 'prop-types';
import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { Input,DateInput, RadioInput } from '../common/index';
import { onSignIn } from '../utils/auth';

export default class Signup extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    sex: null,
    address: '',
    bloodType: '',
    username: '',
    password: '',
    password2: ''
  };

  _getToken = () => {
    const params = {
      grant_type: 'password',
      username: 'Proba60',
      password: 'SuperPass1!'
    };

    window.fetch('https://363fcfa6.ngrok.io/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: Object.keys(params).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&'),
      method: 'POST'
    }).then(res => res.json())
      .then(console.log)
      .catch(console.log);

    onSignIn();
  };

  _submit = () => {
    this.context.setLoading(true);
    window.fetch('https://363fcfa6.ngrok.io/api/account/register', {
      body: JSON.stringify({
        Username: "Proba60",
        Password: "SuperPass1!",
        ConfirmPassword: "SuperPass1!"
      }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(res => {
      if (res.status === 200) {
        this._getToken();
      } else {
        this.context.setLoading(false);
        alert('Something went wrong');
      }
    })
      .catch(() => {
        this.context.setLoading(false);
        alert('Something went wrong');
      });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          autoFocus
          label="First name"
          onChange={(text) => this.setState({ firstName: text})}
          value={this.state.firstName}
        />
        <Input
          label="Last name"
          onChange={(text) => this.setState({ lastName: text})}
          value={this.state.lastName}
        />
        <Input
          autoCapitalize="none"
          label="Phone"
          onChange={(text) => this.setState({ phone: text})}
          value={this.state.phone}
        />
        <Input
          autoCapitalize="none"
          label="Email"
          onChange={(text) => this.setState({ email: text})}
          value={this.state.email}
        />
        <DateInput
          label="Date of birth"
          onChange={(date) => this.setState({ dob: date})}
          value={this.state.dob}
        />
        <RadioInput
          label="Sex"
          value={this.state.sex}
          options={['M', 'F']}
          onChange={(sex) => this.setState({ sex })}
        />
        <Input
          label="Address"
          onChange={(text) => this.setState({ address: text})}
          value={this.state.address}
        />
        <RadioInput
          label="Blood type"
          value={this.state.bloodType}
          options={['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', '0+', '0-']}
          onChange={(bloodType) => this.setState({ bloodType })}
        />
        <Input
          autoCapitalize="none"
          label="Username"
          onChange={(text) => this.setState({ username: text})}
          value={this.state.username}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          onChange={(text) => this.setState({ password: text})}
          value={this.state.password}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Repeat Password"
          onChange={(text) => this.setState({ password2: text})}
          value={this.state.password2}
        />
        <Button title="Submit" onPress={this._submit} color="#ff2222" style={{ margin: 20 }} />
      </ScrollView>
    )
  }
}

Signup.contextTypes = {
  setLoading: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 16,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});