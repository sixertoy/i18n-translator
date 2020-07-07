import { getFirebaseApp } from '../core';

function create(path, values) {
  return new Promise((resolve, reject) => {
    const firebase = getFirebaseApp();
    firebase
      .database()
      .ref(path)
      .set(values, error => {
        if (error) {
          reject(error);
        } else {
          resolve(path);
        }
      });
  });
}

export default create;
