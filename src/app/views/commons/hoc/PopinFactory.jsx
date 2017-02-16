import React from 'react';
// project

const factory = (Wrapped) => {
  class PopinFactory extends React.Component {

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
      const action = this.props.facade.getAction('ApplicationAction');
      action.togglePopin(false);
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
        <div className="application-popin flex-rows flex-centered absolute-container"
          style={{
            overflow: 'hidden',
            background: 'rgba(0, 0, 0, 0.75)'
          }}>
          <div className="application-popin-inner flex-rows"
            style={{
              padding: '0',
              width: '80%',
              height: '95%',
              margin: '0 auto',
              overflow: 'hidden',
              background: 'white'
            }}>
            <div className="application-popin-header flex-columns flex-space-between"
              style={{
                width: '100%',
                paddingTop: '12px',
                paddingLeft: '12px',
                paddingRight: '12px',
                paddingBottom: '12px',
                background: '#FBFBFB'
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

  PopinFactory.propTypes = {
    title: React.PropTypes.string.isRequired,
    facade: React.PropTypes.object.isRequired
  };

  return PopinFactory;

};

export default factory;
