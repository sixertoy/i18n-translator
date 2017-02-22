import React from 'react';
// import Select from 'react-select';
import isempty from 'lodash.isempty';
// project
import PopinFooter from './../commons/PopinFooter';
import PopinFactory from './../commons/PopinFactory';
import ReactAceEditor from './../commons/ReactAceEditor';
import { entries } from './../../../core/utils/ObjectUtils';
import StepsIterator from './../../../core/iterators/StepsIterator';

class ImportPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this._locales = {};
    this._ismounted = false;
    this._selectOptions = [
      { value: 'json', label: 'JSON' },
      { value: 'javascript', label: 'JavaScript' }
    ];
    this._stepsIterator = StepsIterator([
      () => this.renderFileImportStep.bind(this),
      // question: is it a description file
      () => this.renderSelectLanguage.bind(this),
      // question: import another language
      () => this.renderLoadMoreContent.bind(this)
    ]);
    this._editordefaultvalue = '// Put your JSON code to start working with your translations';
    this.state = {
      count: 0,
      langkey: false,
      jsonstring: false,
      jsonisvalid: false,
      editormode: this._selectOptions[0].value,
      currentstep: this._stepsIterator.next().value
    };
  }

  /* --------------------------------------------------

   Lifecycle

  -------------------------------------------------- */

  componentDidMount () {
    this._ismounted = true;
  }

  componentWillUnmount () {
    this._ismounted = false;
  }

  /* --------------------------------------------------

   Privates

  -------------------------------------------------- */

  _onLoadMoreContentHandler (e, response) {
    e.preventDefault();
    const action = this.props.facade.getAction('ApplicationAction');
    action.addLanguage(this.state.langkey, this.state.jsonstring);
    if (response) {
      this.setState({
        langkey: false,
        jsonstring: false,
        jsonisvalid: false,
        count: (this.state.count + 1),
        currentstep: this._stepsIterator.next().value
      });
    } else {
      action.togglePopin('import');
    }
  }

  _onClickSubmitHandler (e) {
    e.preventDefault();
    this.setState({
      jsonisvalid: false,
      currentstep: this._stepsIterator.next().value
    });
  }

  _onClickLanguageHandler (e, langkey) {
    e.stopPropagation();
    this.setState({
      langkey
    });
  }

  _onAceEditorChange (value) {
    try {
      const obj = JSON.parse(value);
      if (isempty(obj)) {
        // should alert user
        throw new Error('is empty');
      }
      this.setState({
        jsonstring: value,
        jsonisvalid: true
      });
    } catch (e) {
      this.setState({
        jsonstring: value,
        jsonisvalid: false
      });
    }
  }

  /* --------------------------------------------------

   Steps Renders

  -------------------------------------------------- */

  renderLoadMoreContent () {
    return (
      <div className="flex-rows flex-centered"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
        <h3>
          <span>Load more language set ?</span>
        </h3>
        <p style={{
          marginTop: '0'
        }}>
          <button onClick={e => this._onLoadMoreContentHandler(e, false)}
            style={{
              margin: '0 10px',
              paddingLeft: '20px',
              paddingRight: '20px',
              background: this.context.theme.grey
            }}>
            <span>No</span>
          </button>
          <button onClick={e => this._onLoadMoreContentHandler(e, true)}
            style={{
              margin: '0 10px',
              paddingLeft: '20px',
              paddingRight: '20px',
              background: this.context.theme.velvet
            }}>
            <span>Yes</span>
          </button>
        </p>
      </div>
    );
  }

  renderSelectLanguage () {
    const languages = {
      // using language keys RFC 3066
      'en-US': 'English',
      'it-IT': 'Italian',
      'fr-FR': 'French',
      'es-ES': 'Spanish',
      'pt-PT': 'Portuguese',
      'de-DE': 'German'
    };
    return (
      <div className="flex-rows flex-centered"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
        <h3>
          <span>Select language ?</span>
        </h3>
        <p style={{
          marginTop: '0'
        }}>
          {entries(languages)
            .filter(([key]) => (this.props.langs.indexOf(key) === -1))
            .map(([key, val]) =>
              <label key={`radio-${key}`}
                htmlFor={key}
                style={{
                  marginRight: '7px'
                }}>
                <input id={key}
                  value={key}
                  type="radio"
                  name="lang-radio-input"
                  onClick={e => this._onClickLanguageHandler(e, key)} />
                <span style={{
                  marginLeft: '3px'
                }}>{val}</span>
              </label>
            )}
        </p>
      </div>
    );
  }

  renderFileImportStep () {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
        <ReactAceEditor usecopy={false}
          readOnly={false}
          editorid={'editor-import'}
          editormode={this.state.editormode}
          defaultvalue={this._editordefaultvalue}
          changehandler={e => this._onAceEditorChange(e)}
          jsonstring={this.state.jsonstring || this._editordefaultvalue} />
      </div>
    );
  }

  /* --------------------------------------------------

   Renders

  -------------------------------------------------- */

  render () {
    const showsubmit = this.state.jsonisvalid || this.state.langkey;
    if (!isempty(this.props.primarykeys)) {
      const defaultvalue = this.props.primarykeys
        .reduce((obj, key) => Object.assign(obj, { [key]: '' }), {});
      this._editordefaultvalue = JSON.stringify(defaultvalue, null, ' ');
    }
    return (
      <div className="application-popin-content flex-rows"
        style={{
          padding: '0',
          width: '100%',
          height: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          background: 'white'
        }}>
        {/*
          <div className="flex-rows flex-no-shrink"
          style={{
            width: '100%',
            zIndex: '500',
            color: 'white',
            padding: '12px 32px',
            background: this.context.theme.velvet
          }}>
            <div style={{ width: '240px' }}>
            <Select name="aceeditor-mode-select"
              clearable={false}
              value={this.state.editormode}
              options={this._selectOptions}
              onChange={({ label, value }) => this._onEditorModeChange(label, value)} />
            </div>
          </div>
        */}
        <div className="flex-rows"
          style={{
            width: '100%',
            height: '100%'
          }}>{this.state.currentstep()}</div>
        <PopinFooter cancelClickHandler={false}
          submitClickHandler={!showsubmit
            ? false : e => this._onClickSubmitHandler(e)} />
      </div>
    );
  }

}

ImportPopin.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ImportPopin.propTypes = {
  langs: React.PropTypes.array.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default PopinFactory(ImportPopin);
