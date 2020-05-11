import { createUseStyles } from 'react-jss';

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
  input: {
    '&::placeholder': { fontSize: 12, opacity: 0.35 },
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  },
});

export default useTableStyles;
