import React from 'react';

import ReactAceEditor from '../commons/ReactAceEditor';

class ExportScreen extends React.PureComponent {
  _renderTextArea() {
    const string =
      this.props.selectexport < 0
        ? this.props.json
        : this.props.values[this.props.selectexport];
    const editorid =
      this.props.selectexport < 0
        ? 'diff'
        : this.props.langs[this.props.selectexport];
    return (
      <div
        className="application-screen-content"
        style={{
          background: '#FFFFFF',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}>
        <div className="absolute-container">
          <ReactAceEditor
            editorid={`editor-${editorid}`}
            jsonstring={JSON.stringify(string, null, '  ')}
            usecopy={false}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          height: '100%',
          margin: '0 auto',
          position: 'relative',
          textAlign: 'center',
          width: '100%',
        }}>
        {this._renderTextArea()}
      </div>
    );
  }
}

ExportScreen.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

ExportScreen.propTypes = {
  json: React.PropTypes.object.isRequired,
  langs: React.PropTypes.array.isRequired,
  selectexport: React.PropTypes.number.isRequired,
  values: React.PropTypes.array.isRequired,
};

export default ExportScreen;
