import React from 'react';
// import Select from 'react-select';
import isempty from 'lodash.isempty';
// project
import PopinFooter from './../commons/PopinFooter';
import PopinFactory from './../commons/PopinFactory';
import ReactAceEditor from './../commons/ReactAceEditor';
import StepsIterator from './../../../core/iterators/StepsIterator';

class ImportPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this._datas = [];
    this._ismounted = false;
    this._currentvalue = false;
    this._selectOptions = [
      { value: 'json', label: 'JSON' },
      { value: 'javascript', label: 'JavaScript' }
    ];
    this._stepsIterator = StepsIterator([
      () => this.renderFileImportStep.bind(this),
      // question: is it a description file
      () => this.renderLoadMoreContent.bind(this)
    ]);
    this._editordefaultvalue = '{"super": "super"}';
    // this._editordefaultvalue = '// Put your JSON code to start working with your translations';
    this.state = {
      count: 0,
      submitted: false,
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
    if (response) {
      this.setState({
        submitted: false,
        jsonisvalid: false,
        count: (this.state.count + 1),
        currentstep: this._stepsIterator.next().value
      });
    } else {
      const action = this.props.facade.getAction('ApplicationAction');
      action.importLanguagesSet(this._datas);
    }
  }

  _onClickSubmitHandler (e) {
    e.preventDefault();
    this.setState({
      submitted: true,
      currentstep: this._stepsIterator.next().value
    });
  }

  _onAceEditorChange (value) {
    this._currentvalue = value;
    try {
      const obj = JSON.parse(value);
      if (isempty(obj)) {
        // should alert user
        throw new Error('is empty');
      }
      this._datas[this.state.count] = obj;
      this.setState({
        jsonisvalid: true
      });
    } catch (e) {
      this.setState({
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
          jsonstring={this._currentvalue || this._editordefaultvalue} />
      </div>
    );
  }

  /* --------------------------------------------------

   Renders

  -------------------------------------------------- */

  render () {
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
          submitClickHandler={!this.state.jsonisvalid || this.state.submitted
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
  facade: React.PropTypes.object.isRequired
};

export default PopinFactory(ImportPopin);
