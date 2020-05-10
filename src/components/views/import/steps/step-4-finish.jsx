import PropTypes from 'prop-types';
import React from 'react';
// import { AiOutlineSave as SaveIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLimits } from '../../../../redux/selectors';

const useStyles = createUseStyles({
  button: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['use-pointer', 'py12', 'px12', 'text-center', 'mx7'],
    width: 250,
  },
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

  const { id } = useParams();
  const { hasReach, limited, nextCount, willReach } = useSelector(state =>
    selectLimits(state, id)
  );

  const isLocked = limited && hasReach;
  const enableAddButton = !willReach && !limited;

  return (
    <div className={classes.container}>
      {/* TODO ajouter une info quand l'utilisateur ne peux plus ajouter de langue */}
      <button
        className={classes.button}
        disabled={isLocked || !enableAddButton}
        type="button"
        onClick={onRestart}>
        <span>Ajouter un autre langage</span>
        {limited && <i>({nextCount}) langues restants</i>}
      </button>
      <span className={classes.splitter}>
        <span>-&nbsp;Ou&nbsp;-</span>
      </span>
      <button
        className={classes.button}
        disabled={isLocked}
        type="button"
        onClick={onSubmit}>
        <span>Continuer</span>
      </button>
    </div>
  );
};

StepFinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default StepFinishComponent;