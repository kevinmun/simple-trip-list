/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';


function mapStateToProps(state) {
  return {
    data: state.trips,
  };
}

export default connect(mapStateToProps)(HomeScreen);
