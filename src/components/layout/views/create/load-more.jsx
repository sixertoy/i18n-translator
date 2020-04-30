import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const buttonBase = {
  margin: '0 10px',
  paddingLeft: 20,
  paddingRight: 20,
};

const useStyles = createUseStyles({
  buttonCancel: ({ theme }) => ({
    background: theme.colors.grey,
    extend: buttonBase,
  }),
  buttonConfirm: ({ theme }) => ({
    background: theme.colors.velvet,
    extend: buttonBase,
  }),
  container: {
    composes: ['flex-rows', 'flex-center'],
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  wrapper: {
    composes: ['mt0'],
  },
});

const LoadMoreComponent = ({ onClick }) => {
  const onClickButton = (evt, value) => {
    evt.preventDefault();
    onClick(value);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>
        <span>Load more language set ?</span>
      </h3>
      <p className={classes.wrapper}>
        <button
          className={classes.buttonCancel}
          type="button"
          onClick={evt => onClickButton(evt, false)}>
          <span>No</span>
        </button>
        <button
          className={classes.buttonConfirm}
          type="button"
          onClick={evt => onClickButton(evt, true)}>
          <span>Yes</span>
        </button>
      </p>
    </div>
  );
};

LoadMoreComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreComponent;
