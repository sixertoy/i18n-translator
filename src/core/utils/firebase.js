const ENV = process.env;
const FIREBASE_KEY_PREFIX = 'FIREBASE_';

export const getFirebaseConfig = () => {
  const keys = Object.entries(ENV);
  const filtered = keys.filter(a => a[0].indexOf(FIREBASE_KEY_PREFIX) !== -1);
  if (!filtered.length) {
    console.log('process.env => ', process.env);
    throw new Error('Unable to load firebase configuration');
  }
  console.log('filtered => ', filtered);
  const reword = filtered.map(([key, value]) => {
    const len = FIREBASE_KEY_PREFIX.length;
    const index = key.indexOf(FIREBASE_KEY_PREFIX);
    const start = index + len;
    const name = key.slice(start);
    return [name, value];
  });
  const config = reword.reduce((a, [k, v]) => ({ ...a, [k]: v }), {});
  console.log('firebaseConfig => ', config);
  return config;
};

export default getFirebaseConfig;
