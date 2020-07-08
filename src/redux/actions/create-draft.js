import { getName } from 'ikea-name-generator';
import ucFirst from 'lodash.upperfirst';
import slugify from 'slugify';
import { v1 as uuidv1 } from 'uuid';

import { EVENT_TYPES } from '../../constants';
import { database } from '../../core/firebase';

const createDraftAsync = () => dispatch =>
  new Promise(resolve => {
    const langs = [];
    const id = uuidv1();
    const now = Date.now();
    const path = `/projects/${id}`;
    const name = ucFirst(getName());
    const slug = slugify(name);
    const draft = {
      content: '',
      ctime: now,
      id,
      langs,
      mtime: now,
      name,
      slug,
    };
    database.create(path, draft).then(() => {
      dispatch({ draft, type: EVENT_TYPES.DRAFT_CREATE });
      resolve(id);
    });
  });

export default createDraftAsync;
