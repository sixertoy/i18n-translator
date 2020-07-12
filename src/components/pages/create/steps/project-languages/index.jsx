import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { DEFAULT_LANGUAGES } from '../../../../../constants';

const useStyles = createUseStyles({
  container: {},
  pill: {
    '&.isselected': {
      background: '#000',
      color: '#FFF',
    },
    background: '#CCC',
    borderRadius: 20,
    composes: ['text-center', 'mr12'],
    height: 40,
    width: 120,
  },
});

const CreateProjectLangsComponent = React.memo(({ initial }) => {
  const classes = useStyles();
  const [selected, selectSelected] = useState([]);

  const clickHandler = useCallback(
    value => {
      let next = [...selected];
      const exists = next.includes(value);
      if (!exists) {
        next.push(value);
      } else {
        next = next.filter(v => v !== value);
      }
      selectSelected(next);
    },
    [selected]
  );

  return (
    <div className={classes.container}>
      {initial.map(([value, label]) => {
        const isselected = selected.includes(value);
        return (
          <button
            key={value}
            className={classnames(classes.pill, { isselected })}
            type="button"
            onClick={() => clickHandler(value)}>
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
});

CreateProjectLangsComponent.defaultProps = {
  initial: Object.entries(DEFAULT_LANGUAGES),
};

CreateProjectLangsComponent.propTypes = {
  initial: PropTypes.arrayOf(PropTypes.array),
};

export default CreateProjectLangsComponent;
