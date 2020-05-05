import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineClose as ClearIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    background: 'transparent',
    color: '#000000',
    composes: ['px12', 'is-full-height', 'is-block'],
    fontSize: 10,
  },
  column: ({ theme }) => ({
    composes: ['flex-0'],
    maxWidth: theme.sizes.keycol,
    minWidth: theme.sizes.keycol,
    width: theme.sizes.keycol,
  }),
  input: {
    composes: ['is-bold', 'px7', 'fs12', 'is-uppercase'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  line: ({ theme }) => ({
    '&.even': { background: theme.colors.even },
    '&.odd': { background: theme.colors.odd },
    borderRadius: '4px 0 0 4px',
    composes: ['flex-columns', 'no-overflow', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
});

const KeysComponent = ({ items }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div className={classes.column}>
      {items.map((key, index) => {
        const odd = index % 2;
        const even = !odd;
        return (
          <div key={key} className={classnames(classes.line, { even, odd })}>
            <button className={classes.button} type="button" onClick={() => {}}>
              <ClearIcon />
            </button>
            <input
              className={classes.input}
              defaultValue={key}
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
  );
};

KeysComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default KeysComponent;
