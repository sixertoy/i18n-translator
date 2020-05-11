import 'ace-builds';
import 'ace-builds/webpack-resolver';
// import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import AceEditor from 'react-ace';

const PLACEHOLDER_VALUE =
  '// Put your JSON code to start working with your translations';

const CodeEditorComponent = ({ className, content, disabled, onChange }) => {
  const editor = useRef(null);

  const onEditorChange = useCallback(
    value => {
      onChange(value, true);
    },
    [onChange]
  );

  const onEditorValidate = useCallback(
    annotations => {
      let valid = true;
      if (annotations.length) {
        const errors = annotations.filter(({ type }) => type === 'error');
        valid = !errors && !errors.length;
      }
      onChange(content, valid);
    },
    [content, onChange]
  );

  return (
    <AceEditor
      ref={editor}
      highlightActiveLine
      showGutter
      wrapEnabled
      className={className}
      editorProps={{ $blockScrolling: true }}
      fontSize={14}
      height="100%"
      mode="json"
      name="code-editor"
      placeholder={PLACEHOLDER_VALUE}
      readOnly={disabled}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
      }}
      showPrintMargin={false}
      tabSize={2}
      theme="github"
      value={content || ''}
      width="100%"
      onChange={onEditorChange}
      // onLoad={() => {}}
      onValidate={onEditorValidate}
    />
  );
};

CodeEditorComponent.defaultProps = {
  className: '',
  content: null,
  disabled: false,
};

CodeEditorComponent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditorComponent;
