import React from 'react';
// project
import { ObjectUtils } from './../../core/utils';
import ApplicationAceEditor from './commons/ApplicationAceEditor';

class ApplicationExportPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  _onCloseHandler (evt) {
    evt.preventDefault();
    const action = this.props.facade.getAction('ApplicationAction');
    action.togglePopin();
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

  _renderCloseButton () {
    return (
      <a href=""
        style={{
          display: 'block',
          color: '#000000'
        }}
        onClick={e => this._onCloseHandler(e)}>
        <i className="icon-cancel" />
      </a>
    );
  }

  _renderLocalesTabs () {
    const current = this.state.current;
    return (
      <span className="popin-locales-tabs"
        style={{
          marginRight: '40px'
        }}>
        {ObjectUtils.entries(this.props.locales)
          .map(([langkey], index) => <a href=""
            key={`tabs_${langkey}`}
            style={{
              width: '40px',
              paddingTop: '7px',
              marginRight: '3px',
              textAlign: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '7px',
              color: (current === index) ? '#338596' : '#ABABAB',
              background: (current === index) ? '#FFFFFF' : 'transparent'
            }}
            onClick={e => this._onLocaleTabClick(e, index)} >
            <span>{langkey}</span>
          </a>)}
        <a href=""
          style={{
            paddingTop: '7px',
            marginRight: '3px',
            textAlign: 'center',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingBottom: '7px',
            color: (current < 0) ? '#338596' : '#ABABAB',
            background: (current < 0) ? '#FFFFFF' : 'transparent'
          }}
          onClick={e => this._onDiffButtonClick(e)}>
          <span>{'< diff >'}</span>
        </a>
      </span>
    );
  }

  _renderPopinHeader () {
    return (
      <div className="application-popin-header flex-columns flex-align-end"
        style={{
          width: '100%',
          lineHeight: '25px',
          paddingTop: '12px',
          paddingLeft: '12px',
          paddingRight: '12px',
          background: '#FBFBFB'
        }} >
        {this._renderLocalesTabs()}
        {this._renderCloseButton()}
      </div>
    );
  }

  _renderPopinFooter () {
    return (
      <div className="application-popin-footer flex-columns flex-align-end"
        style={{
          width: '100%',
          height: '50px',
          paddingLeft: '12px',
          paddingRight: '12px',
          background: '#FBFBFB'
        }} />
    );
  }

  _renderTextArea () {
    let langkey = null;
    let locales = null;
    const entries = ObjectUtils.entries(this.props.locales);
    if (this.state.current < 0) {
      langkey = 'diff';
      locales = this.props.json;
    } else {
      [langkey, locales] = entries[this.state.current];
    }
    return (
      <div className="application-popin-content"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          background: '#FFFFFF'
        }}>
        <div className="absolute-container" >
          <ApplicationAceEditor locales={locales}
            langkey={`editor-${langkey}`} />
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
            padding: '0',
            width: '80%',
            height: '95%',
            margin: '0 auto',
            overflow: 'hidden',
            background: 'white'
          }}>
          {this._renderPopinHeader()}
          {this._renderTextArea()}
          {this._renderPopinFooter()}
        </div>
      </div>
    );
  }

}

ApplicationExportPopin.propTypes = {
  json: React.PropTypes.object.isRequired,
  facade: React.PropTypes.object.isRequired,
  locales: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired
};

export default ApplicationExportPopin;
