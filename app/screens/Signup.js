import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Button, ScrollView, StyleSheet, Image } from 'react-native';
import { Input,DateInput, RadioInput, Loading } from '../common/index';
import { saveToken } from '../utils/auth';

export default class Signup extends React.Component {
  state = {
    Name: '',
    PhoneNumber: '',
    Email: '',
    DateOfBirth: '',
    Sex: null,
    Address: '',
    BloodType: '',
    Password: '',
    ConfirmPassword: '',

    loading: false
  };

  _getToken = () => {
    const params = {
      grant_type: 'password',
      username: this.state.Email,
      password: this.state.Password
    };

    window.fetch('https://363fcfa6.ngrok.io/token', {
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

  _submit = () => {
    if(!this._isValid()) return;
    this.setState({ loading: true });
    window.fetch('https://363fcfa6.ngrok.io/api/account/register', {
      body: JSON.stringify({ ...this.state, DateOfBirth: moment(this.state.DateOfBirth).format('DDMMYYYY') }),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    }).then(res => {
      if (res.status === 200) {
        this._getToken();
      } else {
        this.setState({ loading: false });
        alert('Something went wrong');
      }
    })
      .catch(() => {
        this.setState({ loading: false });
        alert('Something went wrong');
      });
  };

  _isValid = () => {
    const { Name, Address, Password, BloodType, ConfirmPassword, DateOfBirth, Email, PhoneNumber, Sex } = this.state;

    if (!Name || !Address || !Password || !BloodType || !ConfirmPassword || !DateOfBirth || !Email || !PhoneNumber || !Sex) {
      alert('All fields are required');
      return false;
    }

    if (Password !== ConfirmPassword) {
      alert('Passwords don\'t match');
      return false;
    }

    return true;
  };

  render() {
    return (
      <ScrollView  style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Image source={require('../../assets/images/blood-donation.jpg')} style={styles.image} resizeMode="contain" />
        <Input
          label="Name"
          onChange={(text) => this.setState({ Name: text})}
          value={this.state.Name}
        />
        <Input
          autoCapitalize="none"
          label="Phone"
          onChange={(text) => this.setState({ PhoneNumber: text})}
          value={this.state.PhoneNumber}
        />
        <Input
          autoCapitalize="none"
          label="Email"
          onChange={(text) => this.setState({ Email: text})}
          value={this.state.Email}
        />
        <DateInput
          label="Date of birth"
          onChange={(date) => this.setState({ DateOfBirth: date})}
          value={this.state.DateOfBirth}
        />
        <RadioInput
          label="Sex"
          value={this.state.Sex}
          options={['M', 'F']}
          onChange={(Sex) => this.setState({ Sex })}
        />
        <Input
          label="Address"
          onChange={(text) => this.setState({ Address: text})}
          value={this.state.Address}
        />
        <RadioInput
          label="Blood type"
          value={this.state.BloodType}
          options={['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', '0+', '0-']}
          onChange={(BloodType) => this.setState({ BloodType })}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Password"
          onChange={(text) => this.setState({ Password: text})}
          value={this.state.Password}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Repeat Password"
          onChange={(text) => this.setState({ ConfirmPassword: text})}
          value={this.state.ConfirmPassword}
        />
        <Button title="Submit" onPress={this._submit} color="#ff2222" style={{ margin: 20, marginVertical: 40 }} />
        {this.state.loading && <Loading />}
      </ScrollView>
    )
  }
}

Signup.contextTypes = {
  setLoading: PropTypes.func
};

const styles = StyleSheet.create({
  scrollContent: {
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