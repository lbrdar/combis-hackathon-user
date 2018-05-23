import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

function LoadingView(props) {
  return (
    <View style={[styles.content, { backgroundColor: props.overlayColor }]}>
      <View style={[styles.loading, props.style]}>
        <ActivityIndicator size={props.size} color={props.color} />
      </View>
    </View>
  );
}

LoadingView.defaultProps = {
  color: 'gray',
  size: 'large',
  overlayColor: 'lightgray',
  style: {}
};

LoadingView.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  overlayColor: PropTypes.string,
  style: PropTypes.shape({})
};

const styles = StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'stretch'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});

export default LoadingView;
