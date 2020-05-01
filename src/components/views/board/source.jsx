import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    background: '#FFFFFF',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
});

const SourceComponent = () => {
  const classes = useStyles();
  // let langkey = null;
  // let locales = null;
  // const values = entries(this.props.locales);
  // if (this.state.current < 0) {
  //   langkey = 'diff';
  //   locales = this.props.json;
  // } else {
  //   [langkey, locales] = values[this.state.current];
  // }
  return (
    <div className={classes.container}>
      <div className="absolute-container">
        {/* <AceEditor
          editorid={`editor-${langkey}`}
          jsonstring={JSON.stringify(locales, null, '  ')}
        /> */}
      </div>
    </div>
  );
};

SourceComponent.defaultProps = {};

SourceComponent.propTypes = {};

export default SourceComponent;
