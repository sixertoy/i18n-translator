import React from 'react';

const SubmitButton = props => (
  <button
    className={`button-type-${props.type}`}
    style={props.styles}
    type={props.type}
    onClick={props.clickHandler}>
    <span>
      {props.iconclass && <i className={props.iconclass} />}
      {props.label && <span>{props.label}</span>}
    </span>
  </button>
);

SubmitButton.defaultProps = {
  iconclass: false,
  label: false,
  styles: {},
  type: 'button',
};

SubmitButton.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  iconclass: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]),
  styles: React.PropTypes.object,
  type: React.PropTypes.string,
};

export default SubmitButton;
