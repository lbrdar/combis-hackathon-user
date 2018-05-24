import React from 'react';
import { Text, ScrollView, StyleSheet, Image, Dimensions, Button } from 'react-native';
import { removeToken } from '../utils/auth';

export default class Account extends React.Component {
  _delete = () => {
    removeToken();
    this.props.navigation.goBack(null);
    this.props.navigation.navigate('SignedOut');
  };

  render() {
    return (
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Image source={require('../../assets/images/qr_code.png')} style={styles.image} resizeMode="contain"/>
        <Text style={styles.line}><Text style={styles.bold}>Name:</Text> Leo Brdar</Text>
        <Text style={styles.line}><Text style={styles.bold}>Phone:</Text> 051/456-321</Text>
        <Text style={styles.line}><Text style={styles.bold}>Email:</Text> leo.brdar@combis.hr</Text>
        <Text style={styles.line}><Text style={styles.bold}>Date of Birth:</Text> 22/02/2018</Text>
        <Text style={styles.line}><Text style={styles.bold}>Sex:</Text> Male</Text>
        <Text style={styles.line}><Text style={styles.bold}>Address:</Text> Set. I. G. Kovacica 13</Text>
        <Text style={styles.line}><Text style={styles.bold}>Blood type:</Text> A+</Text>

        <Button title="Delete account and all data" onPress={this._delete} color="#ff2222" style={{ alignSelf: 'center' }} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    minHeight: Dimensions.get('window').height
  },
  scrollContent: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    paddingBottom: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    minHeight: Dimensions.get('window').height
  },
  image: {
    height: 120,
    marginVertical: 20,
    alignSelf: 'center'
  },
  line: {
    fontSize: 14,
    margin: 16,
    textAlign: 'left'
  },
  bold: {
    fontWeight: '600'
  }
});