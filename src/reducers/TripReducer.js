import { AddTrip } from '../actions/TripActions';

const INITIAL_STATE = [{ id: 1, text: 'Hello1' }, { id: 2, text: 'Hello2' }, { id: 3, text: 'Hello3' }];


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

export default trips;
