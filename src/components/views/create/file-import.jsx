import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import AceEditor from '../../commons/ace-editor';

const useStyles = createUseStyles({
  container: {},
});

const FileImportComponent = ({ content, mode, onChange }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: '100%',
        position: 'relative',
        width: '100%',
      }}>
      <AceEditor
        changehandler={e => onChange(e)}
        content={content}
        mode={mode}
        usecopy={false}
      />
    </div>
  );
};

FileImportComponent.defaultProps = {};

FileImportComponent.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default FileImportComponent;
