import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAS4pVfCSifV2FkwkLN5b414gq0-z21C7k',
  authDomain: 'notebook-209c5.firebaseapp.com',
  databaseURL: 'https://notebook-209c5.firebaseio.com',
  projectId: 'notebook-209c5',
  storageBucket: 'notebook-209c5.appspot.com',
  messagingSenderId: '698159929763',
  appId: '1:698159929763:web:c495a7d06038707b',
};

firebase.initializeApp(config);

export default {
  getPoints: () =>firebase.firestore().collection('points').get(),
  add: (data) =>firebase.firestore().collection('points').doc(data.id).set(data),
  delete: (id) => firebase.firestore().collection('points').doc(id).delete(),
};
