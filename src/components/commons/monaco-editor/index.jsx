import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
// NOTE DOcumentation
// https://github.com/react-monaco-editor/react-monaco-editor
import MonacoEditor from 'react-monaco-editor';

import validate from './validator';

const PLACEHOLDER_VALUE =
  '// Put your JSON code to start working with your translations';

const MonacoEditorComponent = ({
  // className,
  content,
  disabled,
  onChange,
}) => {
  const onEditorChange = useCallback(
    json => {
      const errors = validate(json, false);
      const hasErrors = Array.isArray(errors) && errors.length;
      onChange(json, (hasErrors && errors) || null);
    },
    [onChange]
  );
  const debounceEditorChange = debounce(onEditorChange, 1000);

  const editorDidMount = useCallback(editor => {
    editor.focus();
  }, []);

  // NOTE Dark Mode
  // theme="vs-dark"
  return (
    <MonacoEditor
      defaultValue={PLACEHOLDER_VALUE}
      editorDidMount={editorDidMount}
      height="100%"
      language="json"
      options={{
        contextmenu: false,
        folding: false,
        foldingHighlight: false,
        fontSize: 14,
        formatOnPaste: true,
        formatOnType: true,
        highlightActiveIndentGuide: false,
        links: false,
        matchBrackets: 'never',
        minimap: { enabled: false },
        // quickSuggestions: false,
        readOnly: disabled,
        renderWhitespace: 'all',
        wordWrap: 'wordWrapColumn',
        wordWrapColumn: 80,
        wrappingIndent: 'same',
      }}
      theme="vs-light"
      value={content}
      width="100%"
      onChange={debounceEditorChange}
    />
  );
};

MonacoEditorComponent.defaultProps = {
  // className: '',
  content: '',
  disabled: false,
};

MonacoEditorComponent.propTypes = {
  // className: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default MonacoEditorComponent;
