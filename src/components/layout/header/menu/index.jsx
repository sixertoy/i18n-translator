import React from 'react';

import Login from './login';
import Projects from './projects';

const ApplicationMenuComponent = React.memo(() => {
  return (
    <div>
      <Login />
      <Projects />
    </div>
  );
});

export default ApplicationMenuComponent;
