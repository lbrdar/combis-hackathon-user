import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Button, ScrollView, StyleSheet, Image, Text } from 'react-native';
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

        <Text style={styles.note}>
          Blood Donation needs your personal data to successfully track blood reserves. We will use your email and phone
          number to contact you about organized blood donating events and for nothing else. Leo Brdar is responsible for
          personal information security and will gladly help you with any questions or issues you have - you can contact
          him at leo.brdar@gmail.com. You are free to delete your account at any time and with that you are automatically
          deleting all your personal data from our database. Otherwise, your data will be securely stored with us for an
          indefinite period of time.
        </Text>
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
  },
  note: {
    paddingTop: 10,
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'justify'
  }
});