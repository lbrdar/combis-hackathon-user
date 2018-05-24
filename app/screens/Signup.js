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
    pass: '',
    pass2: ''
  };

  _submit = () => {
    // TODO
    onSignIn();
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
          secureTextEntry
          label="Password"
          onChange={(text) => this.setState({ pass: text})}
          value={this.state.pass}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          label="Repeat Password"
          onChange={(text) => this.setState({ pass2: text})}
          value={this.state.pass2}
        />
        <Button title="Submit" onPress={this._submit} color="#ff2222" style={{ margin: 20 }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 16,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});