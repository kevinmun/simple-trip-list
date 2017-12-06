import { createStore } from 'redux';
import trips from './reducers/TripReducer';

export default createStore(trips);
