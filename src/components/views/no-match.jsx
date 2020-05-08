import React from 'react';
import { Redirect } from 'react-router-dom';

const NoMatchComponent = React.memo(() => {
  return <Redirect push={false} to="/404" />;
});

export default NoMatchComponent;
