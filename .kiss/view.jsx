/* @flow */
import React from 'react';
// punkbeer

class %%name%% extends React.PureComponent {

  getChildContext () {
    return {};
  }

  constructor (props, context) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps, nextContext) {}

  shouldComponentUpdate(nextProps, nextState, nextContext)  {}

  componentWillUpdate(nextProps, nextState, nextContext) {}

  componentDidUpdate(prevProps, prevState, prevContext) {}

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
