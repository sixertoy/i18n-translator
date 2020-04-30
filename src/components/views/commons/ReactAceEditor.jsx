// ace editor config
import 'brace/theme/github';
import 'brace/mode/json';
import 'brace/mode/javascript';

import noop from 'lodash.noop';
import React from 'react';
import AceEditor from 'react-ace';
import CopyToClipboard from 'react-copy-to-clipboard';

const renderCopyToClipboard = jsonstring => (
  <CopyToClipboard text={jsonstring}>
    <a
      className="application-copy-to-clipboard shadow-around"
      style={{
        cursor: 'pointer',
        padding: '7px 12px',
        position: 'absolute',
        right: '30px',
        top: '20px',
      }}>
      <span>Copy to clipboard</span>
    </a>
  </CopyToClipboard>
);

const ReactAceEditor = props => (
  <div
    className="application-ace-editor"
    style={{
      height: '100%',
      position: 'relative',
      width: '100%',
    }}>
    {props.usecopy ? renderCopyToClipboard(props.jsonstring) : false}
    <AceEditor
      focus
      wrapEnabled
      defaultValue={props.jsonstring || props.defaultvalue}
      editorProps={{ $blockScrolling: true }}
      height="100%"
      mode={props.editormode}
      name={`${props.editorid}`}
      readOnly={props.readOnly}
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
      value={props.jsonstring}
      width="100%"
      onChange={e => props.changehandler(e)}
    />
  </div>
);

ReactAceEditor.defaultProps = {
  changehandler: noop,
  defaultvalue: '',
  editormode: 'json',
  jsonstring: '',
  label: '',
  readOnly: true,
  usecopy: true,
};

ReactAceEditor.propTypes = {
  changehandler: React.PropTypes.func,
  defaultvalue: React.PropTypes.string,
  editorid: React.PropTypes.string.isRequired,
  editormode: React.PropTypes.string,
  jsonstring: React.PropTypes.string,
  readOnly: React.PropTypes.bool,
  usecopy: React.PropTypes.bool,
};

export default ReactAceEditor;
