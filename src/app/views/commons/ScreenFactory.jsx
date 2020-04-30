import React from 'react';

const factory = Wrapped => {
  class ScreenFactory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {}

    /* ---------------------------------------------------------------------

     Handlers

    --------------------------------------------------------------------- */

    _onCloseHandler(evt) {
      evt.preventDefault();
      const action = this.context.facade.getAction('ApplicationAction');
      action.toggleScreen();
    }

    /* ---------------------------------------------------------------------

     Privates

    --------------------------------------------------------------------- */

    _renderCloseButton() {
      return (
        <a
          href=""
          style={{
            color: '#000000',
            display: 'block',
          }}
          onClick={e => this._onCloseHandler(e)}>
          <i className="icon-cancel" />
        </a>
      );
    }

    render() {
      return (
        <div
          className="application-screen flex-rows flex-centered absolute-container"
          style={{
            background: 'rgba(0, 0, 0, 0.75)',
            overflow: 'hidden',
          }}>
          <div
            className="application-screen-inner flex-rows"
            style={{
              background: 'white',
              height: '95%',
              margin: '0 auto',
              maxHeight: '620px',
              overflow: 'hidden',
              padding: '0',
              width: '80%',
            }}>
            <div
              className="application-screen-header flex-columns flex-space-between"
              style={{
                background: '#FBFBFB',
                padding: '12px 12px 12px 32px',
                width: '100%',
              }}>
              <h3
                style={{
                  margin: '0',
                  padding: '0',
                }}>
                <span>{this.props.title}</span>
              </h3>
              {this._renderCloseButton()}
            </div>
            <Wrapped submitted={this.state.submitted} {...this.props} />
          </div>
        </div>
      );
    }
  }

  ScreenFactory.contextTypes = {
    facade: React.PropTypes.object,
    theme: React.PropTypes.object,
  };

  ScreenFactory.propTypes = {
    title: React.PropTypes.string.isRequired,
  };

  return ScreenFactory;
};

export default factory;
