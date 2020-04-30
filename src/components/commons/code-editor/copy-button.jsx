import PropTypes from 'prop-types';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['shadow-around', 'is-absolute', 'py7', 'px12', 'is-pointer'],
    right: 30,
    top: 20,
  },
});

const CopyButtonComponent = ({ content }) => {
  const classes = useStyles();
  return (
    <CopyToClipboard text={content}>
      <button className={classes.container} type="button">
        Copy to clipboard
      </button>
    </CopyToClipboard>
  );
};

CopyButtonComponent.defaultProps = {
  content: null,
};

CopyButtonComponent.propTypes = {
  content: PropTypes.string,
};

export default CopyButtonComponent;
