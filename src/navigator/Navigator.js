import React from 'react';
import {
  TabNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen';
import ProfileScreen from '../components/ProfileScreen';

export const Navigator = TabNavigator({
  Home: { screen: HomeScreen, path: 'Home' },
  Profile: { screen: ProfileScreen, path: 'Profile' },
});

const ConnectedNavigator = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

ConnectedNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ConnectedNavigator);
