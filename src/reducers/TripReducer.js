import { AddTrips } from '../actions/TripActions';

const INITIAL_STATE = [];


function trips(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AddTrips:
      return [
        ...state,
        ...action.trips,
      ];
    default:
      return state;
  }
}

export default trips;
