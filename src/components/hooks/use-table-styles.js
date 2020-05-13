import { createUseStyles } from 'react-jss';

import { rgba } from '../../core/utils';

const COL_WIDTH = 300;
const DEPTHS_HEADER = 999;
const PRIMARY_COL_WIDTH = 220;

export const useTableStyles = createUseStyles({
  cell: ({ theme }) => ({
    '&.even': { background: theme.table.even },
    '&.odd': { background: theme.table.odd },
    color: theme.table.font,
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
    background: theme.table.odd,
    height: theme.sizes.colheader,
    position: 'sticky',
    top: 0,
    zIndex: primary ? DEPTHS_HEADER + 10 : DEPTHS_HEADER - depth,
  }),
  input: ({ theme }) => ({
    '&.error': {
      background: rgba(theme.colors.black, 0.05),
      color: theme.colors.danger,
      paddingLeft: 7,
    },
    '&::placeholder': { fontSize: 12, opacity: 0.35 },
    '&:focus': {
      background: rgba(theme.colors.black, 0.05),
      color: rgba(theme.table.font, 0.85),
      paddingLeft: 7,
    },
    '.primary-keys &': { color: rgba(theme.table.font, 1) },
    background: rgba(theme.colors.black, 0),
    borderColor: 'transparent',
    borderRadius: theme.radius.small,
    borderStyle: 'solid',
    borderWidth: 1,
    color: rgba(theme.table.font, 0.5),
    height: '100%',
    paddingLeft: 0,
    textOverflow: 'ellipsis',
    transition: 'background 0.5s 0.1s, padding-left 0.3s, color 0.3s',
    width: '100%',
  }),
});

export default useTableStyles;
