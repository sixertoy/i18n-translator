import { EVENT_TYPES } from '../../constants';

const collapseLanguage = collapse => ({
  collapse,
  type: EVENT_TYPES.LANGUAGE_COLLAPSE,
});

export default collapseLanguage;
