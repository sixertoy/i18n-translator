import React from 'react';
// project
import { entries } from './../../../core/utils/ObjectUtils';
import PopinFactory from './../commons/PopinFactory';
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
    return (
      <span className="popin-locales-tabs"
        style={{
          marginRight: '40px'
        }}>
        {entries(this.props.langs)
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
      </span>
    );
  }

  _renderTextArea () {
    let langkey = null;
    let locales = null;
    const arr = entries(this.props.values);
    if (this.state.current < 0) {
      langkey = 'diff';
      locales = this.props.json;
    } else {
      [langkey, locales] = arr[this.state.current];
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
          <ReactAceEditor editorid={`editor-${langkey}`}
            usecopy={false}
            jsonstring={JSON.stringify(locales, null, '  ')} />
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
  langs: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.array
  ]).isRequired,
  json: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired,
  values: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object
  ]).isRequired
};

export default PopinFactory(ExportPopin);
