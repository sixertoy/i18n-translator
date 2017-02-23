import React from 'react';
import noop from 'lodash.noop';
import AceEditor from 'react-ace';
import CopyToClipboard from 'react-copy-to-clipboard';
// ace editor config
import 'brace/theme/github';
import 'brace/mode/json';
import 'brace/mode/javascript';

const renderCopyToClipboard = jsonstring => (<CopyToClipboard text={jsonstring}>
  <a className="application-copy-to-clipboard shadow-around"
    style={{
      top: '20px',
      right: '30px',
      cursor: 'pointer',
      padding: '7px 12px',
      position: 'absolute'
    }}>
    <span>Copy to clipboard</span>
  </a>
</CopyToClipboard>);

const ReactAceEditor = props => (
  <div className="application-ace-editor"
    style={{
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
    {props.usecopy ? renderCopyToClipboard(props.jsonstring) : false}
    <AceEditor readOnly={props.readOnly}
      focus
      wrapEnabled
      tabSize={2}
      width="100%"
      height="100%"
      theme="github"
      showPrintMargin={false}
      mode={props.editormode}
      value={props.jsonstring}
      name={`${props.editorid}`}
      onChange={e => props.changehandler(e)}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        showInvisibles: false,
        showPrintMargin: false,
        showLineNumbers: false,
        displayIndentGuides: true,
        highlightGutterLine: false
      }}
      defaultValue={props.jsonstring || props.defaultvalue} />
  </div>
);

ReactAceEditor.defaultProps = {
  label: '',
  usecopy: true,
  jsonstring: '',
  readOnly: true,
  defaultvalue: '',
  editormode: 'json',
  changehandler: noop
};

ReactAceEditor.propTypes = {
  usecopy: React.PropTypes.bool,
  readOnly: React.PropTypes.bool,
  jsonstring: React.PropTypes.string,
  editormode: React.PropTypes.string,
  changehandler: React.PropTypes.func,
  defaultvalue: React.PropTypes.string,
  editorid: React.PropTypes.string.isRequired
};

export default ReactAceEditor;
