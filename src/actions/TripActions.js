const AddTrip = 'ADD_TRIP';

function addTrip(trip) {
  return {
    type: AddTrip,
    trip,
  };
}

export default { AddTrip, addTrip };
