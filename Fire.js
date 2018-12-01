import uuid from 'uuid';

import getUserInfo from './utils/getUserInfo';
import shrinkImageAsync from './utils/shrinkImageAsync';
import uploadPhoto from './utils/uploadPhoto';

const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const collectionName = 'snack-SJucFknGX';

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCIoBYpIaOAwiv8WhefwJmmTKXsMnW-K74",
        authDomain: "hacktolive-8e6ae.firebaseapp.com",
        databaseURL: "https://hacktolive-8e6ae.firebaseio.com",
        projectId: "hacktolive-8e6ae",
        storageBucket: "hacktolive-8e6ae.appspot.com",
        messagingSenderId: "28339117001"
      });
    }

    // Some nonsense...
    firebase.firestore().settings({ timestampsInSnapshots: true });

    // Listen for auth
    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        await firebase.auth().signInAnonymously();
      }
    });
  }

  // Upload Data
  uploadPhotoAsync = async uri => {
    const path = `${collectionName}/${this.uid}/${uuid.v4()}.jpg`;
    return uploadPhoto(uri, path);
  };

  post = async ({ text, image: localUri }) => {
    try {
      const { uri: reducedImage, width, height } = await shrinkImageAsync(
        localUri,
      );

      const remoteUri = await this.uploadPhotoAsync(reducedImage);
      this.collection.add({
        text,
        uid: this.uid,
        timestamp: this.timestamp,
        imageWidth: width,
        imageHeight: height,
        image: remoteUri,
        user: getUserInfo(),
      });
    } catch ({ message }) {
      alert(message);
    }
  };

  // Get Brgy. Food Terminal data from Google Firebase database
  // Data sourced from https://data.gov.ph/dataset/barangay-food-terminals-bfts
  getBftData = function() {
    return firebase.database().ref('BFT/').once('value', function(snapshot) {
      let bftData = snapshot.val();
      return bftData;
    });
  };

  // Helpers
  get collection() {
    return firebase.firestore().collection(collectionName);
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  get timestamp() {
    return Date.now();
  }
}

Fire.shared = new Fire();
export default Fire;