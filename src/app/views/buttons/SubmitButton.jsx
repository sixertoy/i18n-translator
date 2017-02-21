import React from 'react';

const SubmitButton = props => (
  <button className={`button-type-${props.type}`}
    type={props.type}
    style={props.styles}
    onClick={props.clickHandler} >
    <span>
      {props.iconclass && <i className={props.iconclass} />}
      {props.label && <span>{props.label}</span>}
    </span>
  </button>
);

SubmitButton.defaultProps = {
  styles: {},
  label: false,
  type: 'button',
  iconclass: false
};

SubmitButton.propTypes = {
  type: React.PropTypes.string,
  styles: React.PropTypes.object,
  clickHandler: React.PropTypes.func.isRequired,
  iconclass: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ]),
  label: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ])
};

export default SubmitButton;
