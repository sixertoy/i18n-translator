const model = {
  email: null, // [{ [key]: label }]
  langs: [], // number
  lastActive: () => Date.now(), // bool
  logged: false, // bool
  provider: null, // string -> voir les providers firebase
};

export default model;
