import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { inputStyles, lineStyles } from './styles';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    composes: ['flex-0', 'debug'],
    maxWidth: theme.sizes.colwidth,
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  input: ({ theme }) => ({
    ...inputStyles(theme),
    fontWeight: 'bold',
  }),
  line: ({ theme }) => ({
    ...lineStyles(theme),
    borderRadius: '4px 0 0 4px',
  }),
});

const PrimaryKeysComponent = ({ items }) => {
  const theme = useTheme();
  // const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div className={classes.column}>
      {items.map((key, index) => {
        const odd = index % 2;
        return (
          <div key={key} className={classnames(classes.line, { odd })}>
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

PrimaryKeysComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PrimaryKeysComponent;
