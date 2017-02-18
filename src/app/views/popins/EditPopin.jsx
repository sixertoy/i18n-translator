import React from 'react';
// project
import { ObjectUtils } from './../../../core/utils';
import PopinFactory from './../commons/hoc/PopinFactory';
import ReactAceEditor from './../commons/ReactAceEditor';

class ExportPopin extends React.PureComponent {

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
          <ReactAceEditor jsonstring={JSON.stringify(locales, null, '  ')}
            editorid={`editor-${langkey}`} />
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="inner flex-rows"
        style={{
          padding: '0',
          width: '80%',
          height: '95%',
          margin: '0 auto',
          overflow: 'hidden',
          background: 'white'
        }}>
        {this._renderLocalesTabs()}
        {this._renderTextArea()}
      </div>
    );
  }

}

ExportPopin.propTypes = {
  json: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired,
  locales: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired
};

export default PopinFactory(ExportPopin);
