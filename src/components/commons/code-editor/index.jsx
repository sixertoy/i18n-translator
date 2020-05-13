import 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/mode-jsx';
import 'ace-builds/src-min-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';

import validate from './validator';

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
  const [isReady, setIsReady] = useState(false);

  const onReactAceBeforeLoad = useCallback(() => {
    setIsReady(false);
  }, []);

  const onReactAceLoad = useCallback(() => {
    setIsReady(true);
  }, []);

  const onEditorChange = useCallback(
    json => {
      const errors = validate(json, false);
      const hasErrors = Array.isArray(errors) && errors.length;
      onChange(json, (hasErrors && errors) || null);
    },
    [onChange]
  );
  const debounceEditorChange = debounce(onEditorChange, 1000);

  useEffect(() => {
    if (forceUpdate) onEditorChange(content);
  }, [content, forceUpdate, onEditorChange]);

  return (
    <AceEditor
      ref={editor}
      enableBasicAutocompletion
      focus
      highlightActiveLine
      showGutter
      wrapEnabled
      className={className}
      debounceChangePeriod={0}
      editorProps={{ $blockScrolling: true }}
      enableLiveAutocompletion={false}
      enableSnippets={false}
      fontSize={14}
      height="100%"
      mode="json"
      name="code-editor"
      placeholder={PLACEHOLDER_VALUE}
      readOnly={!isReady || disabled}
      setOptions={{
        showLineNumbers: true,
        useWorker: false,
      }}
      showPrintMargin={false}
      tabSize={2}
      theme="github"
      value={content || ''}
      width="100%"
      onBeforeLoad={onReactAceBeforeLoad}
      onChange={debounceEditorChange}
      onLoad={onReactAceLoad}
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
