/* @flow */
import React from 'react';
import AceEditor from 'react-ace';
// punkbeer

class ApplicationPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  _onEditorChange () {

  }

  _renderTextArea () {
    console.log('diff', this.props.provider);
    /*
    return (
      <AceEditor mode="java"
        theme="github"
        name="UNIQUE_ID_OF_DIV"
        onChange={e => this._onEditorChange(e)}
        editorProps={{ $blockScrolling: true }} />
    );
    */
  }

  render () {
    console.log('this.props.provider', this.props.provider);
    return false;
    return (
      <div className="flex-rows flex-vertical-centered"
        style={{
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '100',
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.75)'
        }}>
        <div style={{
          width: '80%',
          height: '80%',
          padding: '2Opx',
          margin: '0 auto',
          background: 'white'
        }}>
          {this._renderTextArea()}
        </div>
      </div>
    );
  }

}

ApplicationPopin.propTypes = {
  facade: React.PropTypes.object.isRequired,
  provider: React.PropTypes.object.isRequired
};

export default ApplicationPopin;
