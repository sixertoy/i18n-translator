import PropTypes from 'prop-types';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';

import Button from '../button';

const GithubButtonComponent = React.memo(({ className, login }) => {
  return (
    <Button className={className} onClick={() => {}}>
      <GithubIcon className="mr12" />
      {!login && <span>Sign in with GitHub</span>}
      {login && <span>Login in with GitHub</span>}
    </Button>
  );
});

GithubButtonComponent.defaultProps = {
  className: '',
  login: false,
};

GithubButtonComponent.propTypes = {
  className: PropTypes.string,
  login: PropTypes.bool,
};

export default GithubButtonComponent;
