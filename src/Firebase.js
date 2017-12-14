import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD7hDTuqCuaYf3x-DjsqqZLA3V9wopYWrU',
  authDomain: 'plan-b09fd.firebaseapp.com',
  databaseURL: 'https://plan-b09fd.firebaseio.com',
  projectId: 'plan-b09fd',
  storageBucket: 'plan-b09fd.appspot.com',
  messagingSenderId: '1058859357432',
};
firebase.initializeApp(config);

export default firebase;
