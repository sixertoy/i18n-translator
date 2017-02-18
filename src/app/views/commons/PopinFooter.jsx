/* @flow */
import React from 'react';
// project
import SubmitButton from './../buttons/SubmitButton';

class PopinFooter extends React.PureComponent {

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
      <div className="application-popin-footer flex-columns flex-align-end"
        style={{
          width: '100%',
          minHeight: '60px',
          padding: '12px 32px',
          background: '#FBFBFB'
        }} >
        {!this.props.cancelClickHandler
          ? false
          : (<SubmitButton label={this.props.cancellabel}
            clickHandler={e => this.props.cancelClickHandler(e)} />)}
        {!this.props.submitClickHandler
          ? false
          : (<SubmitButton label={this.props.submitlabel}
            clickHandler={e => this.props.submitClickHandler(e)} />)}
      </div>
    );
  }

}

PopinFooter.propTypes = {
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

PopinFooter.defaultProps = {
  cancellabel: 'Cancel',
  submitlabel: 'Continue'
};

export default PopinFooter;
