import isempty from 'lodash.isempty';
import React from 'react';

import StepsIterator from '../../../core/iterators/StepsIterator';
import { entries } from '../../../core/utils/ObjectUtils';
import Constants from '../../constants';
import ImportScreenFooter from '../commons/ImportScreenFooter';
import ReactAceEditor from '../commons/ReactAceEditor';

class ImportScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ismounted = false;
    this._stepsIterator = StepsIterator([
      () => this.renderFileImportStep.bind(this),
      // question: is it a description file
      () => this.renderSelectLanguage.bind(this),
      // question: import another language
      () => this.renderLoadMoreContent.bind(this),
    ]);

    let defaultvalue =
      '// Put your JSON code to start working with your translations';
    if (!isempty(props.primarykeys)) {
      defaultvalue = props.primarykeys.reduce(
        (obj, key) => Object.assign(obj, { [key]: '' }),
        {}
      );
      defaultvalue = JSON.stringify(defaultvalue, null, '  ');
    }

    this.state = {
      count: 0,
      currentstep: this._stepsIterator.next().value,
      defaultvalue,
      editormode: 'json',
      jsonisvalid: false,
      jsonstring: defaultvalue,
      langkey: false,
    };
  }

  /* --------------------------------------------------

   Lifecycle

  -------------------------------------------------- */

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  /* --------------------------------------------------

   Privates

  -------------------------------------------------- */

  _onLoadYesNoClickHandler(e, response) {
    e.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.addLanguage(this.state.langkey, this.state.jsonstring);
    if (response) {
      this.setState({
        count: this.state.count + 1,
        currentstep: this._stepsIterator.next().value,
        jsonisvalid: false,
        jsonstring: response ? this.state.defaultvalue : false,
        langkey: false,
      });
    } else {
      action.toggleScreen(Constants.SCREENS.EDIT);
    }
  }

  _onClickSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      currentstep: this._stepsIterator.next().value,
      jsonisvalid: false,
    });
  }

  _onClickLanguageHandler(e, langkey) {
    e.stopPropagation();
    this.setState({
      langkey,
    });
  }

  _onClickEditorModeHandler({ value }) {
    this.setState({
      editormode: value,
    });
  }

  _onAceEditorChange(value) {
    console.log(arguments);
    let jsonisvalid = false;
    const jsonstring = value;
    console.log('jsonstring', typeof jsonstring);
    if (!isempty(value)) {
      try {
        JSON.parse(jsonstring);
        jsonisvalid = true;
      } catch (e) {
        // if value is empty, is not a valid string
        console.log('invalid Object/JSON String');
      }
    }
    this.setState({
      jsonisvalid,
      jsonstring,
    });
  }

  /* --------------------------------------------------

   Steps Renders

  -------------------------------------------------- */

  renderLoadMoreContent() {
    return (
      <div
        className="flex-rows flex-centered"
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}>
        <h3>
          <span>Load more language set ?</span>
        </h3>
        <p
          style={{
            marginTop: '0',
          }}>
          <button
            style={{
              background: this.context.theme.grey,
              margin: '0 10px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={e => this._onLoadYesNoClickHandler(e, false)}>
            <span>No</span>
          </button>
          <button
            style={{
              background: this.context.theme.velvet,
              margin: '0 10px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
            onClick={e => this._onLoadYesNoClickHandler(e, true)}>
            <span>Yes</span>
          </button>
        </p>
      </div>
    );
  }

  renderSelectLanguage() {
    const languages = {
      // using language keys RFC 3066
      'de-DE': 'German',
      'en-US': 'English',
      'es-ES': 'Spanish',
      'fr-FR': 'French',
      'it-IT': 'Italian',
      'pt-PT': 'Portuguese',
    };
    return (
      <div
        className="flex-rows flex-centered"
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}>
        <h3>
          <span>Select language ?</span>
        </h3>
        <p
          style={{
            marginTop: '0',
          }}>
          {entries(languages)
            .filter(([key]) => this.props.langs.indexOf(key) === -1)
            .map(([key, val]) => (
              <label
                key={`radio-${key}`}
                htmlFor={key}
                style={{
                  marginRight: '7px',
                }}>
                <input
                  id={key}
                  name="lang-radio-input"
                  type="radio"
                  value={key}
                  onClick={e => this._onClickLanguageHandler(e, key)}
                />
                <span
                  style={{
                    marginLeft: '3px',
                  }}>
                  {val}
                </span>
              </label>
            ))}
        </p>
      </div>
    );
  }

  renderFileImportStep() {
    return (
      <div
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}>
        <ReactAceEditor
          changehandler={e => this._onAceEditorChange(e)}
          defaultvalue={this.props.defaultvalue}
          editorid="editor-import"
          editormode={this.state.editormode}
          jsonstring={this.state.jsonstring}
          readOnly={false}
          usecopy={false}
        />
      </div>
    );
  }

  /* --------------------------------------------------

   Renders

  -------------------------------------------------- */

  render() {
    const showsubmit = this.state.jsonisvalid || this.state.langkey;
    return (
      <div
        className="application-screen-content flex-rows"
        style={{
          background: 'white',
          height: '100%',
          margin: '0 auto',
          overflow: 'hidden',
          padding: '0',
          width: '100%',
        }}>
        <div
          className="flex-rows"
          style={{
            height: '100%',
            width: '100%',
          }}>
          {this.state.currentstep()}
        </div>
        <ImportScreenFooter
          cancelClickHandler={false}
          editormode={this.state.editormode}
          editorModeHandler={o => this._onClickEditorModeHandler(o)}
          submitClickHandler={
            !showsubmit ? false : e => this._onClickSubmitHandler(e)
          }
        />
      </div>
    );
  }
}

ImportScreen.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

ImportScreen.propTypes = {
  defaultvalue: React.PropTypes.string,
  langs: React.PropTypes.array.isRequired,
  primarykeys: React.PropTypes.array.isRequired,
};

ImportScreen.defaultProps = {
  defaultvalue: '// Put your JSON code to start working with your translations',
};

export default ImportScreen;
