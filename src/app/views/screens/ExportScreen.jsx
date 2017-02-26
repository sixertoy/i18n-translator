import React from 'react';
// project
import ReactAceEditor from './../commons/ReactAceEditor';

class ExportScreen extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  _onLocaleTabClick (e, index) {
    e.preventDefault();
    if (index === this.state.current) {
      return false;
    }
    return this.setState({
      current: index
    });
  }

  _onDiffButtonClick (e) {
    e.preventDefault();
    this.setState({
      current: -1
    });
  }

  _renderLocalesTabs () {
    return (
      <div className="screen-locales-tabs"
        style={{
          width: '100%',
          padding: '12px 0',
          textAlign: 'right'
        }}>
        {this.props.langs
          .map((val, index) => <a href=""
            key={`tabs_${val}`}
            style={{
              width: '40px',
              paddingTop: '7px',
              marginRight: '3px',
              textAlign: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '7px',
              color: (this.state.current === index) ? '#338596' : '#ABABAB',
              background: (this.state.current === index) ? '#FFFFFF' : 'transparent'
            }}
            onClick={e => this._onLocaleTabClick(e, index)} >
            <span>{val}</span>
          </a>)}
        <a href=""
          style={{
            paddingTop: '7px',
            marginRight: '3px',
            textAlign: 'center',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingBottom: '7px',
            color: (this.state.current < 0) ? '#338596' : '#ABABAB',
            background: (this.state.current < 0) ? '#FFFFFF' : 'transparent'
          }}
          onClick={e => this._onDiffButtonClick(e)}>
          <span>{'< diff >'}</span>
        </a>
      </div>
    );
  }

  _renderTextArea () {
    const string = (this.state.current < 0)
      ? this.props.json
      : this.props.values[this.state.current];
    const editorid = (this.state.current < 0)
      ? 'diff'
      : this.props.langs[this.state.current];
    return (
      <div className="application-screen-content"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          background: '#FFFFFF'
        }}>
        <div className="absolute-container" >
          <ReactAceEditor editorid={`editor-${editorid}`}
            usecopy={false}
            jsonstring={JSON.stringify(string, null, '  ')} />
        </div>
      </div>
    );
  }

  render () {
    return (
      <div style={{
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {this._renderLocalesTabs()}
        {this._renderTextArea()}
      </div>
    );
  }

}

ExportScreen.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ExportScreen.propTypes = {
  langs: React.PropTypes.array.isRequired,
  json: React.PropTypes.object.isRequired,
  values: React.PropTypes.array.isRequired
};

export default ExportScreen;
