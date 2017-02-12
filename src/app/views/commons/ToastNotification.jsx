import React from 'react';

class ToastNotification extends React.Component {

  render () {
    return (
      <div className={`app-toaster-notification ${(this.props.show ? 'show' : '')}`}
        ref={c => (this._component = c)}>
        <a href=""
          onClick={(e) => {
            e.preventDefault();
            this._component.className = this._component.className.replace(' show', '');
          }}>
          <span>{this.props.content}</span>
        </a>
      </div>
    );
  }

}

ToastNotification.defaultProps = {};

ToastNotification.propTypes = {
  show: React.PropTypes.bool.isRequired,
  content: React.PropTypes.string.isRequired
};

export default ToastNotification;
