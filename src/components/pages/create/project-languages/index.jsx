import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import Pill from './pill';

const useStyles = createUseStyles({
  container: {
    composes: ['mb24'],
  },
  languages: {
    composes: ['flex-columns', 'items-center'],
  },
  title: {
    composes: ['mb24', 'is-light'],
  },
});

const CreateProjectLangsComponent = React.memo(({ initial }) => {
  const classes = useStyles();
  const [selection, selectSelection] = useState([]);

  const changeHandler = useCallback(
    (value, selected, json) => {
      const next = selected
        ? [...selection, { json, value }]
        : selection.filter(obj => obj.value !== value);
      selectSelection(next);
    },
    [selection]
  );

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Sélection / Import de langues</h2>
      <div className={classes.languages}>
        {initial.map(arr => {
          const data = { label: arr[1], value: arr[0] };
          return <Pill key={data.value} data={data} onChange={changeHandler} />;
        })}
      </div>
    </section>
  );
});

CreateProjectLangsComponent.defaultProps = {
  initial: Object.entries(DEFAULT_LANGUAGES),
};

CreateProjectLangsComponent.propTypes = {
  initial: PropTypes.arrayOf(PropTypes.array),
};

export default CreateProjectLangsComponent;
