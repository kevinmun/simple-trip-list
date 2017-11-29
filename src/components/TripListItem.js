import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TripListItem extends PureComponent {
  static propTypes = {
    data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    data: {
      text: 'Empty',
    },
  };

  render() {
    const { data } = this.props;
    return <View style={styles.container}><Text>{data.text}</Text></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
