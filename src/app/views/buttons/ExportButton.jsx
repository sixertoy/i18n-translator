import React from 'react';

const ExportButton = props => (
  <button type={props.type}
    style={props.styles}
    onClick={props.clickHandler} >
    <span>
      <i className="icon-download" />
      <span>{props.label}</span>
    </span>
  </button>
);

ExportButton.defaultProps = {
  styles: {},
  type: 'button'
};

ExportButton.propTypes = {
  type: React.PropTypes.string,
  styles: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired
};

export default ExportButton;
