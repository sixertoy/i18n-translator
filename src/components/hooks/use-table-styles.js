import { createUseStyles } from 'react-jss';

import { rgba } from '../../core/utils';

const COL_WIDTH = 300;
const DEPTHS_HEADER = 999;
const PRIMARY_COL_WIDTH = 220;

export const useTableStyles = createUseStyles({
  cell: ({ theme }) => ({
    '&.even': { background: theme.colors.even },
    '&.odd': { background: theme.colors.odd },
    color: theme.colors.black,
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: 60,
    marginBottom: 1,
    padding: 7,
  }),
  column: ({ primary }) => ({
    maxWidth: primary ? PRIMARY_COL_WIDTH : '65%',
    minWidth: primary ? PRIMARY_COL_WIDTH : COL_WIDTH,
    width: primary ? PRIMARY_COL_WIDTH : COL_WIDTH,
    zIndex: primary ? DEPTHS_HEADER + 20 : 'inherit',
  }),
  columns: {
    paddingLeft: PRIMARY_COL_WIDTH,
  },
  header: ({ depth, primary, theme }) => ({
    background: theme.colors.white,
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: primary ? DEPTHS_HEADER + 10 : DEPTHS_HEADER - depth,
  }),
  input: ({ theme }) => ({
    '&::placeholder': { fontSize: 12, opacity: 0.35 },
    '&:focus': { background: rgba(theme.colors.black, 0.05), paddingLeft: 7 },
    background: rgba(theme.colors.black, 0),
    borderRadius: theme.radius.small,
    height: '100%',
    paddingLeft: 0,
    textOverflow: 'ellipsis',
    transition: 'background 0.5s 0.1s, padding-left 0.3s',
    width: '100%',
  }),
});

export default useTableStyles;
