/* @flow */
import React from 'react';
// project
import SubmitButton from './../buttons/SubmitButton';

class ScreenFooter extends React.PureComponent {

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

   Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="application-screen-footer flex-columns flex-align-end"
        style={{
          width: '100%',
          minHeight: '60px',
          padding: '12px 32px',
          background: '#FBFBFB'
        }} >
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
    );
  }

}

ScreenFooter.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

ScreenFooter.propTypes = {
  cancellabel: React.PropTypes.string,
  cancelClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]).isRequired,
  submitlabel: React.PropTypes.string,
  submitClickHandler: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.func
  ]).isRequired
};

ScreenFooter.defaultProps = {
  cancellabel: 'Cancel',
  submitlabel: 'Continue'
};

export default ScreenFooter;
