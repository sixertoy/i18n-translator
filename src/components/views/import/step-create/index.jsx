import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['use-pointer', 'p12', 'text-center', 'mx7'],
    width: theme.sizes.stepbutton,
  }),
  container: {
    composes: ['flex-columns', 'flex-center', 'flex-start'],
    paddingTop: '10%',
  },
  splitter: {
    composes: ['is-block', 'py12', 'text-center', 'mx7'],
  },
});

const StepFinishComponent = ({ onRestart, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      {/* TODO ajouter une info quand l'utilisateur ne peux plus ajouter de langue */}
      <Button onClick={onRestart}>
        <span>Ajouter un autre langage</span>
        {/* {limited && <i>({nextCount}) langues restants</i>} */}
      </Button>
      <span className={classes.splitter}>
        <span>-&nbsp;Ou&nbsp;-</span>
      </span>
      <Button onClick={onRestart}>
        <span>Continuer</span>
        {/* {limited && <i>({nextCount}) langues restants</i>} */}
      </Button>
    </div>
  );
};

StepFinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default StepFinishComponent;
