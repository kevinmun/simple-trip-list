import React from 'react';
import {
  TabNavigator,
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import HomeScreen from '../components/HomeContainer';
import ProfileScreen from '../components/ProfileScreen';


const MainStack = StackNavigator({
  Home: { screen: HomeScreen, path: 'Home' },
});

export const Navigator = TabNavigator({
  Main: { screen: MainStack, path: 'Main' },
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
