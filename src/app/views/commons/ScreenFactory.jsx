import React from 'react';
// project

const factory = (Wrapped) => {
  class ScreenFactory extends React.Component {

    constructor (props) {
      super(props);
      this.state = {};
    }

    componentDidMount () {}

    /* ---------------------------------------------------------------------

     Handlers

    --------------------------------------------------------------------- */

    _onCloseHandler (evt) {
      evt.preventDefault();
      const action = this.context.facade.getAction('ApplicationAction');
      action.toggleScreen(false);
    }

    /* ---------------------------------------------------------------------

     Privates

    --------------------------------------------------------------------- */

    _renderCloseButton () {
      return (
        <a href=""
          onClick={e => this._onCloseHandler(e)}
          style={{
            display: 'block',
            color: '#000000'
          }}><i className="icon-cancel" /></a>
      );
    }

    render () {
      return (
        <div className="application-screen flex-rows flex-centered absolute-container"
          style={{
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.75)'
          }}>
          <div className="application-screen-inner flex-rows"
            style={{
              padding: '0',
              width: '80%',
              height: '95%',
              margin: '0 auto',
              maxHeight: '620px',
              overflow: 'hidden',
              background: 'white'
            }}>
            <div className="application-screen-header flex-columns flex-space-between"
              style={{
                width: '100%',
                background: '#FBFBFB',
                padding: '12px 12px 12px 32px'
              }} >
              <h3 style={{
                margin: '0',
                padding: '0'
              }}>
                <span>{this.props.title}</span>
              </h3>
              {this._renderCloseButton()}
            </div>
            <Wrapped submitted={this.state.submitted}
              {...this.props} />
          </div>
        </div>
      );
    }
  }

  ScreenFactory.contextTypes = {
    theme: React.PropTypes.object,
    facade: React.PropTypes.object
  };

  ScreenFactory.propTypes = {
    title: React.PropTypes.string.isRequired
  };

  return ScreenFactory;

};

export default factory;
