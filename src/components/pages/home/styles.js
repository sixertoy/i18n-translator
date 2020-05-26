import { createUseStyles } from 'react-jss';

const useListStyles = createUseStyles({
  favorite: {
    '& button': { background: 'transparent' },
    '& svg': { color: '#000000' },
    height: 34,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 34,
  },
  item: {
    borderRadius: 3,
    composes: ['is-relative', 'flex-1', 'no-overflow'],
    margin: '0 1% 1% 0',
    maxWidth: '49%',
    minWidth: '49%',
    width: '49%',
  },
  link: {
    '&:hover': { textDecoration: 'none' },
    background: '#FAFBFC',
    color: '#42526E',
    composes: ['is-bold', 'is-block', 'fs16'],
    lineHeight: '1.3em',
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
