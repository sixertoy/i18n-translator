import React from 'react';

import { entries } from '../../../core/utils/ObjectUtils';
import AceEditor from '../commons/ace-editor';

class EditComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  _onLocaleTabClick(e, index) {
    e.preventDefault();
    if (index === this.state.current) {
      return false;
    }
    return this.setState({
      current: index,
    });
  }

  _onDiffButtonClick(e) {
    e.preventDefault();
    this.setState({
      current: -1,
    });
  }

  _renderLocalesTabs() {
    const { current } = this.state;
    return (
      <span
        className="screen-locales-tabs"
        style={{
          marginRight: '40px',
        }}>
        {entries(this.props.locales).map(([langkey], index) => (
          <a
            key={`tabs_${langkey}`}
            href=""
            style={{
              background: current === index ? '#FFFFFF' : 'transparent',
              color: current === index ? '#338596' : '#ABABAB',
              marginRight: '3px',
              paddingBottom: '7px',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '7px',
              textAlign: 'center',
              width: '40px',
            }}
            onClick={e => this._onLocaleTabClick(e, index)}>
            <span>{langkey}</span>
          </a>
        ))}
        <a
          href=""
          style={{
            background: current < 0 ? '#FFFFFF' : 'transparent',
            color: current < 0 ? '#338596' : '#ABABAB',
            marginRight: '3px',
            paddingBottom: '7px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '7px',
            textAlign: 'center',
          }}
          onClick={e => this._onDiffButtonClick(e)}>
          <span>{'< diff >'}</span>
        </a>
      </span>
    );
  }

  _renderTextArea() {
    let langkey = null;
    let locales = null;
    const values = entries(this.props.locales);
    if (this.state.current < 0) {
      langkey = 'diff';
      locales = this.props.json;
    } else {
      [langkey, locales] = values[this.state.current];
    }
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
          <AceEditor
            editorid={`editor-${langkey}`}
            jsonstring={JSON.stringify(locales, null, '  ')}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div
        className="inner flex-rows"
        style={{
          background: 'white',
          height: '95%',
          margin: '0 auto',
          overflow: 'hidden',
          padding: '0',
          width: '80%',
        }}>
        {this._renderLocalesTabs()}
        {this._renderTextArea()}
      </div>
    );
  }
}

EditComponent.propTypes = {
  json: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]).isRequired,
  locales: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.object,
  ]).isRequired,
};

export default EditComponent;
