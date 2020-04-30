import 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/theme-github';

import PropTypes from 'prop-types';
import React from 'react';
import AceEditor from 'react-ace';
import { createUseStyles } from 'react-jss';

// import CopyButton from './copy-button';

const useStyles = createUseStyles({
  container: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
});

// const { NODE_ENV } = process.env;
const DEFAULT_VALUE =
  '// Put your JSON code to start working with your translations';

const CodeEditorComponent = ({ content, mode, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* {usecopy && <CopyButton content={content} />} */}
      <AceEditor
        focus
        wrapEnabled
        editorProps={{ $blockScrolling: true }}
        height="100%"
        mode={mode}
        name="editor-import"
        readOnly={false}
        setOptions={{
          displayIndentGuides: true,
          highlightGutterLine: false,
          showInvisibles: false,
          showLineNumbers: false,
          showPrintMargin: false,
        }}
        showPrintMargin={false}
        tabSize={2}
        theme="github"
        value={content || DEFAULT_VALUE}
        width="100%"
        onChange={onChange}
      />
    </div>
  );
};

CodeEditorComponent.defaultProps = {
  mode: 'json',
};

CodeEditorComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  mode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditorComponent;
