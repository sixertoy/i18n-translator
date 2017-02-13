/* @flow */
import React from 'react';
// project

class %%name%% extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  getChildContext () {
    return {};
  }

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props, context) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  componentWillReceiveProps(nextProps, nextContext) {}

  shouldComponentUpdate(nextProps, nextState, nextContext)  {}

  componentWillUpdate(nextProps, nextState, nextContext) {}

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (!this._initialized) {
      this._initialized = true;
    }
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    return (
      <div></div>
    );
  }

}

%%name%%.propTypes = {
  facade: React.PropTypes.object.isRequired
};

%%name%%.defaultProps = {};

%%name%%.childContextTypes = {};

export default %%name%%;
