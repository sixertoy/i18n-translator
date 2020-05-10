import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Tooltip from '../../../commons/tooltip';
import Menu from './menu';

const useStyles = createUseStyles({
  bigbutton: {
    bottom: 24,
    composes: ['is-absolute'],
    right: 24,
  },
  button: {
    background: 'rgba(0, 0, 0, 1)',
    borderRadius: 28,
    color: '#FFFFFF',
    composes: ['text-center', 'use-pointer'],
    fontSize: '2.2rem',
    height: 56,
    lineHeight: '3rem',
    width: 56,
  },
  icon: {},
});

const BigButton = React.memo(({ scrollTo }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.bigbutton}>
      <Tooltip component={<Menu scrollTo={scrollTo} />} placement="top-end">
        <div className={classes.button}>
          <PlusIcon className={classes.icon} />
        </div>
      </Tooltip>
    </div>
  );
});

BigButton.propTypes = {
  scrollTo: PropTypes.func.isRequired,
};

export default BigButton;
