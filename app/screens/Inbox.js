import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loading } from "../common";


export default class Inbox extends React.Component {
  state = { msgs: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({ msgs: [
        {
          id: '34143',
          type: 'invite',
          text: "This is an invite to donate blood!"
        },
        {
          id: '43241',
          type: 'info',
          text: "Don't forget to come tomorrow to donate blood!"
        }
      ], loading: false }), 1000)
  }

  _goToMsg = msg => {
    this.props.navigation.navigate('Message', { ...msg });
    const newMsgs = this.state.msgs.filter(m => m.id !== msg.id);
    this.setState({ msgs: newMsgs });
    // TODO: Mark as read in db
  };

  _renderRow = ({item}) => (
      <TouchableOpacity style={styles.row} onPress={() => this._goToMsg(item)}>
        <Icon
          size={24}
          name={item.type === 'info' ? 'info' : 'question'}
          style={styles.icon}
        />
        <Text numberOfLines={1} style={styles.label}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );

  _keyExtractor = (item) => item.id;

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <FlatList
        data={this.state.msgs}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1,
    paddingVertical: 5,
    alignItems: 'flex-end',
    backgroundColor: 'white'
  },
  icon: {
    marginHorizontal: 10
  },
  label: {
    height: 30,
    lineHeight: 30
  }
});