import 'react-select/dist/react-select.css';

import React from 'react';
import Select from 'react-select';

import SubmitButton from '../buttons/SubmitButton';

class ImportScreenFooter extends React.PureComponent {
  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor(props) {
    super(props);
    this.state = {};
    this._ismounted = false;
  }

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render() {
    const selectopts = [
      { label: 'JSON', value: 'json' },
      { label: 'JavaScript', value: 'javascript' },
    ];
    return (
      <div
        className="application-screen-footer flex-columns flex-space-between"
        style={{
          background: '#FBFBFB',
          marginLeft: '1px',
          minHeight: '60px',
          padding: '12px 32px',
          width: '100%',
        }}>
        <div>
          <Select
            clearable={false}
            name="form-field-name"
            options={selectopts}
            value={this.props.editormode}
            onChange={e => this.props.editorModeHandler(e)}
          />
        </div>
        <div>
          {!this.props.cancelClickHandler ? (
            false
          ) : (
            <SubmitButton
              clickHandler={e => this.props.cancelClickHandler(e)}
              label={this.props.cancellabel}
            />
          )}
          {!this.props.submitClickHandler ? (
            false
          ) : (
            <SubmitButton
              clickHandler={e => this.props.submitClickHandler(e)}
              iconclass="icon-download"
              label={this.props.submitlabel}
              styles={{ background: this.context.theme.velvet }}
            />
          )}
        </div>
      </div>
    );
  }
}

ImportScreenFooter.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

ImportScreenFooter.propTypes = {
  cancelClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func,
  ]).isRequired,
  cancellabel: React.PropTypes.string,
  editorModeHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func,
  ]).isRequired,
  editormode: React.PropTypes.string,
  submitClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func,
  ]).isRequired,
  submitlabel: React.PropTypes.string,
};

ImportScreenFooter.defaultProps = {
  cancellabel: 'Cancel',
  editormode: 'json',
  submitlabel: 'Continue',
};

export default ImportScreenFooter;
