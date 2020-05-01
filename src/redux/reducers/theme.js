import { EVENT_TYPES } from '../../constants';
import { getThemeByThemeId } from '../../theme';

const onThemeChange = action => {
  const themeid = action.name;
  const theme = getThemeByThemeId(themeid);
  return theme;
};

export const theme = (state = null, action) => {
  switch (action.type) {
    case EVENT_TYPES.THEME_CHANGE:
      return onThemeChange(action);
    default:
      return state;
  }
};

export default theme;
