import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
  inner: {
    composes: ['flex-columns', 'flex-center'],
  },
  splitter: {
    composes: ['is-block', 'py12', 'text-center', 'mx7'],
  },
});

const StepFinishComponent = ({ onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container} id="step-create">
      <div className={classes.inner}>
        {/* TODO ajouter une info quand l'utilisateur ne peux plus ajouter de langue */}
        <Button onClick={() => onSubmit(true)}>
          <span>Ajouter un autre langage</span>
          {/* {limited && <i>({nextCount}) langues restants</i>} */}
        </Button>
        <span className={classes.splitter}>
          <span>-&nbsp;Ou&nbsp;-</span>
        </span>
        <Button onClick={() => onSubmit(false)}>
          <span>Continuer</span>
        </Button>
      </div>
    </div>
  );
};

StepFinishComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StepFinishComponent;
