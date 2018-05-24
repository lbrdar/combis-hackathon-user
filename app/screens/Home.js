import React from 'react';
import { Text, ScrollView, StyleSheet, Button, Image, Dimensions } from 'react-native';
import { removeToken } from '../utils/auth';

export default class Home extends React.Component {
  _logout = () => {
    removeToken();
    this.props.navigation.navigate('SignedOut');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
        <Image source={require('../../assets/images/blood-donation.jpg')} style={styles.image} resizeMode="contain" />
        <Button title="Inbox" onPress={() => this.props.navigation.navigate('Inbox')}  />
        <Button title="Questionnaires" onPress={() => this.props.navigation.navigate('Questionnaires')} />
        <Button title="My Donations" onPress={() => this.props.navigation.navigate('Donations')} />
        <Button title="My Account" onPress={() => this.props.navigation.navigate('Account')} />
        <Button title="Give Feedback" onPress={() => this.props.navigation.navigate('Feedback')} />

        <Button title="Log out" onPress={this._logout} color="#ff2222" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    minHeight: Dimensions.get('window').height
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    minHeight: Dimensions.get('window').height
  },
  image: {
    height: 160,
    marginVertical: 20
  }
});