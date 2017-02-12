import React from 'react';
import AceEditor from 'react-ace';
import CopyToClipboard from 'react-copy-to-clipboard';
// ace editor config
import 'brace/mode/json';
import 'brace/theme/chrome';

const TextEditor = ({ locales, langkey }) => (
  <div style={{
    width: '100%',
    height: '100%',
    position: 'relative'
  }}>
    <CopyToClipboard text={JSON.stringify(locales, null, '  ')}>
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
    </CopyToClipboard>
    <AceEditor readOnly
      wrapEnabled
      tabSize={2}
      mode="json"
      width="100%"
      height="100%"
      theme="chrome"
      name={`${langkey}`}
      showPrintMargin={false}
      editorProps={{ $blockScrolling: true }}
      value={JSON.stringify(locales, null, '  ')}
      annotations={[{ row: 0, column: 2, type: 'error', text: 'Some error.' }]} />
  </div>
);

TextEditor.defaultProps = {
  label: ''
};

TextEditor.propTypes = {
  langkey: React.PropTypes.string.isRequired,
  locales: React.PropTypes.object.isRequired
};

export default TextEditor;
