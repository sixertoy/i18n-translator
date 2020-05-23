import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';

const createDraftAsync = () => dispatch => {
  const id = uuidv1();
  const name = ucFirst(getName());
  const draft = { content: '', id, langs: [], name };
  dispatch({ draft, type: EVENT_TYPES.DRAFT_CREATE });
  return Promise.resolve(id);
};

export default createDraftAsync;
