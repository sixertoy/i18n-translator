// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectRecentProject } from '../../../redux/selectors';

const HomeRedirectComponent = React.memo(() => {
  const recent = useSelector(selectRecentProject);
  // let pathto = `import/${recent.id}`;
  const pathto = `board/${recent.id}`;
  return <Redirect to={pathto} />;
});

export default HomeRedirectComponent;
