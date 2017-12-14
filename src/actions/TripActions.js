import firebase from '../Firebase';

export const AddTrips = 'ADD_TRIPS';
export function addTrips(trips) {
  return {
    type: AddTrips,
    trips,
  };
}

export const fetchTrips = () => (dispatch) => {
  firebase.database()
    .ref('rnscaffold/trips')
    .once('value', (snapshot) => {
      const trips = Object.values(snapshot.val()) || [];
      dispatch(addTrips(trips));
    })
    .catch((error) => {
      console.log(error);
    });
};
