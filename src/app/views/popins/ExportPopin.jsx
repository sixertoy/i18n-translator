import React from 'react';
// project
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
      <div className="popin-locales-tabs"
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
    const jsonstring = JSON.stringify(this.props.values[this.state.current], null, '  ');
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
          <ReactAceEditor editorid={`editor-${this.props.langs[this.state.current]}`}
            usecopy={false}
            jsonstring={jsonstring} />
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="inner flex-rows"
        style={{
          padding: '0',
          width: '100%',
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
  langs: React.PropTypes.array.isRequired,
  json: React.PropTypes.object.isRequired,
  values: React.PropTypes.array.isRequired
};

export default PopinFactory(ExportPopin);
