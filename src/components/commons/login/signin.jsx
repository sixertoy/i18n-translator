import PropTypes from 'prop-types';
import React from 'react';

import GithubLogin from '../buttons/github';
import GoogleLogin from '../buttons/google';

const ReactDumbComponent = React.memo(({ firebase }) => {
  return (
    <React.Fragment>
      <GithubLogin firebase={firebase} />
      <GoogleLogin className="mt7" firebase={firebase} />
    </React.Fragment>
  );
});

ReactDumbComponent.propTypes = {
  firebase: PropTypes.shape().isRequired,
};

export default ReactDumbComponent;
