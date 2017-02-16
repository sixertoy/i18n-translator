import React from 'react';

const SubmitButton = props => (
  <button type={props.type}
    style={props.styles}
    onClick={props.clickHandler} >
    <span>
      <i className={props.iconclass} />
      <span>{props.label}</span>
    </span>
  </button>
);

SubmitButton.defaultProps = {
  styles: {},
  type: 'button',
  iconclass: 'icon-download'
};

SubmitButton.propTypes = {
  type: React.PropTypes.string,
  styles: React.PropTypes.object,
  iconclass: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
};

export default SubmitButton;
