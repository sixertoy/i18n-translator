import React from 'react';
import noop from 'lodash.noop';
import AceEditor from 'react-ace';
import CopyToClipboard from 'react-copy-to-clipboard';
// ace editor config
import 'brace/mode/json';
import 'brace/theme/github';

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

const ReactAceEditor = ({ readOnly, editorid, jsonstring, usecopy, changehandler }) => (
  <div className="application-ace-editor"
    style={{
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
    {usecopy ? renderCopyToClipboard(jsonstring) : false}
    <AceEditor readOnly={readOnly}
      wrapEnabled
      tabSize={2}
      mode="json"
      width="100%"
      height="100%"
      theme="github"
      value={jsonstring}
      name={`${editorid}`}
      showPrintMargin={false}
      onChange={e => changehandler(e)}
      editorProps={{ $blockScrolling: true }}
      annotations={[{ row: 0, column: 2, type: 'error', text: 'Some error.' }]} />
  </div>
);

ReactAceEditor.defaultProps = {
  label: '',
  usecopy: true,
  readOnly: true,
  usecchangehandleropy: true
};

ReactAceEditor.propTypes = {
  usecopy: React.PropTypes.bool,
  readOnly: React.PropTypes.bool,
  changehandler: React.PropTypes.func,
  editorid: React.PropTypes.string.isRequired,
  jsonstring: React.PropTypes.string.isRequired
};

export default ReactAceEditor;
