import { createUseStyles } from 'react-jss';

import { important } from '../../../core/utils';

const useListStyles = createUseStyles({
  favorite: {
    top: important(28, 'px'),
  },
  icon: {
    color: 'rgba(0, 0, 0, 0.25)',
    composes: ['is-absolute'],
    left: 7,
    opacity: 0.5,
    top: 7,
  },
  item: {},
  link: {},
  name: {
    composes: ['is-block', 'no-overflow'],
    maxHeight: '100%',
  },
  wrapper: {},
});

export default useListStyles;
