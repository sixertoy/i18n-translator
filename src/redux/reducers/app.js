import { EVENT_TYPES } from '../../constants';

// NOTE state pour la landing page
// permet de conserver la valeur de l'email
// vers/depuis/entre la page '/' et la page '/signup'
const landing = (state = {}, action) => {
  switch (action.type) {
    case EVENT_TYPES.APP_UPDATE_SUBSCRIBING_EMAIL:
      return { ...state, mail: action.mail };
    default:
      return state;
  }
};

export default landing;
