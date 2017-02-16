import React from 'react';
// project
import PopinFooter from './../commons/PopinFooter';
import ReactAceEditor from './../commons/ReactAceEditor';
import PopinFactory from './../commons/hoc/PopinFactory';
import StepsIterator from './../../../core/iterators/StepsIterator';

class ImportPopin extends React.PureComponent {

  constructor (props) {
    super(props);
    this._datas = [];
    this._ismounted = false;
    this._stepsIterator = StepsIterator([
      this.renderFileImportStep.bind(this),
      // question: is it a description file
      this.renderLoadMoreContent.bind(this)
    ]);
    this.state = {
      submitted: false,
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
    const length = this._datas;
    this._datas[length] = value;
  }

  /* --------------------------------------------------

   Steps Renders

  -------------------------------------------------- */

  renderLoadMoreContent () {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
        <h3>
          <span>Load more language set ?</span>
        </h3>
        <p>
          <button onClick={e => this._onLoadMoreContentHandler(e, false)}>
            <span>No</span>
          </button>
          <button onClick={e => this._onLoadMoreContentHandler(e, true)}>
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
          jsonstring={JSON.stringify({}, null, '  ')}
          changehandler={e => this._onAceEditorChange(e)} />
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
        <div className="flex-rows"
          style={{
            width: '100%',
            height: '100%'
          }}>{this.state.currentstep}</div>
        <PopinFooter cancelClickHandler={false}
          submitClickHandler={this.state.submitted
            ? false : e => this._onClickSubmitHandler(e)} />
      </div>
    );
  }

}

ImportPopin.propTypes = {
  facade: React.PropTypes.object.isRequired
};

export default PopinFactory(ImportPopin);
