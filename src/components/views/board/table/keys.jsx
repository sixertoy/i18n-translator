import classnames from 'classnames';
import React from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectPrimaryKeys } from '../../../../redux/selectors';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '&:hover': { color: theme.active },
    background: 'transparent',
    color: theme.colors.gray,
    composes: ['pr7', 'pl12', 'is-full-height', 'is-block', 'fs12'],
    transition: 'color 0.5s',
  }),
  column: ({ theme }) => ({
    minWidth: theme.sizes.colkey,
    width: theme.sizes.colkey,
  }),
  header: ({ theme }) => ({
    background: '#F1F1F1',
    composes: ['text-center', 'py12'],
    height: theme.sizes.colheader,
  }),
  input: {
    '&::placeholder': { composes: ['fs12'], opacity: 0.35 },
    composes: ['is-bold', 'px7', 'fs12', 'is-uppercase'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  line: ({ theme }) => ({
    '&.even': { background: theme.even },
    '&.odd': { background: theme.odd },
    borderRadius: '4px 0 0 4px',
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
});

const ColumnKeysComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectPrimaryKeys);
  return (
    <div className={classes.column}>
      <div className={classes.header}>
        <KeyIcon />
      </div>
      <div className={classes.list}>
        {items.map((key, index) => {
          const odd = index % 2;
          const even = !odd;
          return (
            <div key={key} className={classnames(classes.line, { even, odd })}>
              <button
                className={classes.button}
                type="button"
                onClick={() => {}}>
                <ClearIcon />
              </button>
              <input
                className={classes.input}
                defaultValue={key}
                placeholder="Enter a value"
                type="text"
                onBlur={evt => {
                  evt.preventDefault();
                  // const udpate = evt.target.value;
                  // dispatch(updateValue({ id, lang, udpate }));
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnKeysComponent;
