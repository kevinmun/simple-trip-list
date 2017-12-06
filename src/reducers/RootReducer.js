import { combineReducers } from 'redux';
import trips from './TripReducer';
import nav from './NavigatorReducer';


export default combineReducers({
  trips,
  nav,
});

