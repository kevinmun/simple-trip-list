import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';

const defaultSource = require('../../images/reactLogo.png');

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
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={defaultSource} />
          <Text style={styles.planText}>{data.text}</Text>
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Text style={styles.text}>10</Text>
              <Text style={styles.text}>Days</Text>
            </View>
            <View style={styles.footerContent}>
              <Text style={styles.text}>10000</Text>
              <Text style={styles.text}>Miles</Text>
            </View>
            <View style={styles.footerContent}>
              <Text style={styles.text}>2</Text>
              <Text style={styles.text}>Hotels</Text>
            </View>
            <View style={styles.footerContent}>
              <Text style={styles.text}>24</Text>
              <Text style={styles.text}>Activities</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.7,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  footerContent: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    position: 'absolute',
    resizeMode: 'contain',
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  planText: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    top: 10,
    left: 10,
  },
});
