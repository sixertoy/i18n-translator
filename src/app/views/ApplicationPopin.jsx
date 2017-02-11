/* @flow */
import React from 'react';
import AceEditor from 'react-ace';
// ace editor config
import 'brace/mode/json';
import 'brace/theme/github';
// punkbeer

class ApplicationPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  _onCloseHandler (evt) {
    evt.preventDefault();
    const action = this.props.facade.getAction('ApplicationAction');
    action.togglePopin();
  }

  _toggleMinified (evt) {
    evt.preventDefault();
  }

  _renderPopinHeader () {
    return (
      <div style={{
        width: '100%',
        height: '40px',
        padding: '2Opx'
      }} >
        <button onClick={e => this._onCloseHandler(e)}>
          <i className="icon-cancel" />
        </button>
      </div>
    );
  }

  _renderPopinFooter () {
    return (
      <div style={{
        width: '100%',
        height: '40px',
        padding: '2Opx'
      }} >
        <button onClick={e => this._toggleMinified(e)}>
          <span>Show minified versions</span>
        </button>
      </div>
    );
  }

  _renderTextArea () {
    console.log('this.props.provider', this.props.provider);
    return (
      <AceEditor readOnly
        mode="json"
        width="100%"
        height="100%"
        theme="github"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={JSON.stringify(this.props.provider, null, '  ')} />
    );
  }

  render () {
    console.log('this.props.provider', this.props.provider);
    return (
      <div className="application-popin flex-rows flex-centered"
        style={{
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '100',
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.75)'
        }}>
        <div className="inner"
          style={{
            width: '80%',
            height: '80%',
            padding: '2Opx',
            margin: '0 auto',
            background: 'white'
          }}>
          {this._renderPopinHeader()}
          <div>
            {this._renderTextArea()}
          </div>
          {this._renderPopinFooter()}
        </div>
      </div>
    );
  }

}

ApplicationPopin.propTypes = {
  facade: React.PropTypes.object.isRequired,
  provider: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired
};

export default ApplicationPopin;
