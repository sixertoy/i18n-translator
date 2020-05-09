import PropTypes from 'prop-types';
import React from 'react';
// import { AiOutlineSave as SaveIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLanguagesLimit } from '../../../../redux/selectors';

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

const FinishComponent = ({ onRestart, onSubmit }) => {
  const theme = useTheme();
  const { id } = useParams();
  const classes = useStyles({ theme });
  const countLangs = useSelector(state => selectLanguagesLimit(state, id));
  const nextCount = countLangs - 1;
  const hasNoLimit = countLangs < 0;
  const canAddSomeMore = nextCount > 0;
  const enableAddButton = hasNoLimit || canAddSomeMore;
  return (
    <div className={classes.container}>
      {/* TODO ajouter une info quand l'utilisateur ne peux plus ajouter de langue */}
      <button
        className={classes.button}
        disabled={!enableAddButton}
        type="button"
        onClick={onRestart}>
        <span>Ajouter un autre langage</span>
        {!hasNoLimit && <i>({nextCount}) langues restants</i>}
      </button>
      <span className={classes.splitter}>
        <span>-&nbsp;Ou&nbsp;-</span>
      </span>
      <button className={classes.button} type="button" onClick={onSubmit}>
        <span>Continuer</span>
      </button>
    </div>
  );
};

FinishComponent.propTypes = {
  onRestart: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FinishComponent;
