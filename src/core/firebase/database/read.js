import { getFirebaseApp } from '../core';

function read(path) {
  return new Promise(resolve => {
    const firebase = getFirebaseApp();
    const data = firebase.database().ref(path);
    data.on('value', snapshot => {
      resolve(snapshot.val());
    });
  });
}

export default read;
