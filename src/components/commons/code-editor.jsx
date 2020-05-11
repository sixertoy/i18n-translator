import 'ace-builds';
import 'ace-builds/webpack-resolver';
// import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import AceEditor from 'react-ace';

const PLACEHOLDER_VALUE =
  '// Put your JSON code to start working with your translations';

const CodeEditorComponent = ({
  className,
  content,
  disabled,
  forceUpdate,
  onChange,
}) => {
  const editor = useRef(null);

  const onEditorChange = useCallback(
    json => {
      let valid = false;
      try {
        JSON.parse(json);
        valid = true;
      } catch {
        valid = false;
      } finally {
        onChange(json, valid);
      }
    },
    [onChange]
  );

  useEffect(() => {
    if (forceUpdate) onEditorChange(content);
  }, [content, forceUpdate, onEditorChange]);

  return (
    <AceEditor
      ref={editor}
      focus
      highlightActiveLine
      showGutter
      wrapEnabled
      className={className}
      debounceChangePeriod={1000}
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
        useWorker: false,
      }}
      showPrintMargin={false}
      tabSize={2}
      theme="github"
      value={content || ''}
      width="100%"
      onChange={onEditorChange}
      // onInput={() => {}}
    />
  );
};

CodeEditorComponent.defaultProps = {
  className: '',
  content: null,
  disabled: false,
  forceUpdate: false,
};

CodeEditorComponent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  forceUpdate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditorComponent;
