import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import CodeEditor from '../../../commons/code-editor';

const useStyles = createUseStyles({
  container: {},
});

const StepContentComponent = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <CodeEditor content={value} mode="json" onChange={onChange} />
      </div>
      {/* <div className={classes.buton}>
        <Button disabled={disabled} label="Créer" onClick={onSubmit} />
      </div> */}
    </React.Fragment>
  );
};

StepContentComponent.defaultProps = {};

StepContentComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default StepContentComponent;
