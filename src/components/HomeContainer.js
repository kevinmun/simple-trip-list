/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { connect } from 'react-redux';
import { fetchTrips } from '../actions/TripActions';
import HomeScreen from './HomeScreen';


function mapStateToProps(state) {
  return {
    data: state.trips,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTrips: () => {
      dispatch(fetchTrips());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
