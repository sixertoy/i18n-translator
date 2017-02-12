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
      <div className="flex-columns flex-align-end"
        style={{
          width: '100%',
          height: '40px',
          padding: '10px 0'
        }} >
        <a href=""
          onClick={e => this._onCloseHandler(e)}>
          <i className="icon-cancel" />
        </a>
      </div>
    );
  }

  _renderPopinFooter () {
    return (
      <div className="flex-columns flex-align-end"
        style={{
          width: '100%',
          height: '50px',
          padding: '10px 0'
        }} >
        <button onClick={e => this._toggleMinified(e)}>
          <span>Show minified versions</span>
        </button>
      </div>
    );
  }

  _renderTextArea (obj, key, len) {
    return (
      <div key={key}
        style={{
          height: `${(100 / len)}%`
        }}>
        <AceEditor readOnly
          wrapEnabled
          tabSize={2}
          mode="json"
          width="100%"
          height="100%"
          theme="github"
          name={`${key}`}
          showPrintMargin={false}
          value={JSON.stringify(obj, null, '  ')}
          annotations={[{ row: 0, column: 2, type: 'error', text: 'Some error.' }]} />
      </div>
    );
  }

  _renderTextAreas () {
    const entries = Object.entries(this.props.locales);
    const len = entries.length;
    console.log('len', this.props.locales);
    return (
      <div className="popin-content"
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}>
        <div className="absolute-container" >
          {entries.map(([key, obj]) => this._renderTextArea(obj, `editor-${key}`, len))}
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="application-popin flex-rows flex-centered absolute-container"
        style={{
          overflow: 'hidden',
          background: 'rgba(0, 0, 0, 0.75)'
        }}>
        <div className="inner flex-rows"
          style={{
            width: '80%',
            height: '95%',
            margin: '0 auto',
            padding: '0 20px',
            background: 'white'
          }}>
          {this._renderPopinHeader()}
          {this._renderTextAreas()}
          {this._renderPopinFooter()}
        </div>
      </div>
    );
  }

}

ApplicationPopin.propTypes = {
  json: React.PropTypes.object.isRequired,
  facade: React.PropTypes.object.isRequired,
  locales: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired
};

export default ApplicationPopin;
