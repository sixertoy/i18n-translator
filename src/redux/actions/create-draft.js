import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';
import { database } from '../../core/firebase';

const createDraftAsync = () => dispatch =>
  new Promise(resolve => {
    const id = uuidv1();
    const now = Date.now();
    const path = `/projects/${id}`;
    const draft = {
      content: '',
      ctime: now,
      id,
      langs: [],
      mtime: now,
      name: ucFirst(getName()),
    };
    database.create(path, draft).then(() => {
      dispatch({ draft, type: EVENT_TYPES.DRAFT_CREATE });
      resolve(id);
    });
  });

export default createDraftAsync;
