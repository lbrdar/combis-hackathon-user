import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Loading } from "../common";

export default class Donations extends React.Component {
  state = { donations: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({ donations: [
        {
          id: '34143',
          date: '20-12-2018',
          location: "KBC Rijeka"
        },
        {
          id: '43241',
          date: '20-01-2018',
          location: "KBC Zagreb"
        },
        {
          id: '111111',
          date: '02-04-2015',
          location: "KBC Rijeka"
        },
        {
          id: '40241',
          date: '20-01-2018',
          location: "CK Rijeka"
        }
      ], loading: false }), 2000)
  }

  _renderRow = ({ item: donation }) => (
    <View style={styles.row}>
     <Text numberOfLines={1} style={styles.label}>
       {donation.date} ({donation.location})
      </Text>
    </View>
  );

  _keyExtractor = (item) => item.id;

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <FlatList
        data={this.state.donations}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  label: {
    height: 30,
    lineHeight: 30
  }
});