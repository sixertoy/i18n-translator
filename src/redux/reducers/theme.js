import { EVENT_TYPES } from '../../constants';
import { getThemeByThemeId } from '../../theme';

const changeTheme = action => {
  const themeid = action.name;
  const theme = getThemeByThemeId(themeid);
  return theme;
};

const theme = (state = null, action) => {
  switch (action.type) {
    case EVENT_TYPES.THEME_CHANGE:
      return changeTheme(action);
    default:
      return state;
  }
};

export default theme;
