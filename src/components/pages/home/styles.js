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
  item: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.07)',
    composes: ['is-relative', 'flex-1', 'no-overflow', 'pl30', 'rnd7'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    composes: ['is-normal', 'is-block', 'fs16'],
    lineHeight: 1.3,
    width: '100%',
  },
  name: {
    composes: ['is-block', 'no-overflow'],
    maxHeight: '100%',
  },
  wrapper: {
    composes: ['py12', 'pl12', 'no-overflow'],
    height: 96,
    paddingRight: 30,
  },
});

export default useListStyles;
