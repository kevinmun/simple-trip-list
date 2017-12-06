import { AddTrip } from '../actions/TripActions'

const INITIAL_STATE = [];


function trips(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AddTrip:
      return [
        ...state,
        action.trip,
      ];
    default:
      return state;
  }
}

export default { trips };
