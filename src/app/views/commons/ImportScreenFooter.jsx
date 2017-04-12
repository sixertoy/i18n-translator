/* @flow */
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// project
import SubmitButton from './../buttons/SubmitButton';

class ImportScreenFooter extends React.PureComponent {

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {};
    this._ismounted = false;
  }

  componentDidMount () {
    this._ismounted = true;
  }

  componentWillUnmount () {
    this._ismounted = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    const selectopts = [
      { value: 'json', label: 'JSON' },
      { value: 'javascript', label: 'JavaScript' }
    ];
    return (
      <div className="application-screen-footer flex-columns flex-space-between"
        style={{
          width: '100%',
          marginLeft: '1px',
          minHeight: '60px',
          padding: '12px 32px',
          background: '#FBFBFB'
        }} >
        <div>
          <Select name="form-field-name"
            clearable={false}
            options={selectopts}
            value={this.props.editormode}
            onChange={e => this.props.editorModeHandler(e)} />
        </div>
        <div>
          {!this.props.cancelClickHandler
            ? false
            : (
              <SubmitButton label={this.props.cancellabel}
                clickHandler={e => this.props.cancelClickHandler(e)} />
            )}
          {!this.props.submitClickHandler
            ? false
            : (
              <SubmitButton label={this.props.submitlabel}
                iconclass="icon-download"
                styles={{ background: this.context.theme.velvet }}
                clickHandler={e => this.props.submitClickHandler(e)} />
            )}
        </div>
      </div>
    );
  }

}

ImportScreenFooter.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ImportScreenFooter.propTypes = {
  editormode: React.PropTypes.string,
  cancellabel: React.PropTypes.string,
  cancelClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]).isRequired,
  submitlabel: React.PropTypes.string,
  submitClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]).isRequired,
  editorModeHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]).isRequired
};

ImportScreenFooter.defaultProps = {
  editormode: 'json',
  cancellabel: 'Cancel',
  submitlabel: 'Continue'
};

export default ImportScreenFooter;
