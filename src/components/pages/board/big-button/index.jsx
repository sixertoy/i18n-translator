import PropTypes from 'prop-types';
import React from 'react';
import { FiPlus as PlusIcon } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';

import { px } from '../../../../core/utils';
import Tooltip from '../../../commons/tooltip';
import Menu from './menu';

const useStyles = createUseStyles({
  bigbutton: {
    bottom: 24,
    composes: ['is-absolute'],
    right: 24,
  },
  button: {
    background: 'linear-gradient(60deg, #EE256B 0%, #FD7822 100%)',
    borderRadius: 28,
    color: '#FFFFFF',
    composes: ['text-center', 'use-pointer'],
    fontSize: '2.2rem',
    height: 56,
    lineHeight: px(51),
    width: 56,
  },
  icon: {},
});

const BigButton = React.memo(({ scrollTo }) => {
  const classes = useStyles();
  return (
    <div className={classes.bigbutton}>
      <Tooltip
        useHover
        component={<Menu scrollTo={scrollTo} />}
        placement="top-end"
        theme="material">
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
