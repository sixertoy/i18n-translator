import React from 'react';

import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const LoginComponent = React.memo(() => {
  return (
    <div id="home-view-login">
      <GithubLogin login />
      <GoogleLogin login />
    </div>
  );
});

export default LoginComponent;
