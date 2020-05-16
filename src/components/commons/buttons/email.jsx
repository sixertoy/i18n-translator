// import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../button';

const useStyles = createUseStyles({
  container: {},
});

const EmailButtonComponent = React.memo(({ email }) => {
  const input = useRef(null);
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <input
        ref={input}
        defaultValue={email}
        placeholder="e-mail"
        type="email"
      />
      <Button onClick={() => {}}>
        <span>S&apos;inscrire</span>
      </Button>
    </div>
  );
});

EmailButtonComponent.defaultProps = {
  email: null,
};

EmailButtonComponent.propTypes = {
  email: PropTypes.string,
};

export default EmailButtonComponent;
