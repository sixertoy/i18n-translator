import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { px } from '../../../../core/utils';
import Tooltip from '../../../commons/tooltip';
import Menu from './menu';

const useStyles = createUseStyles({
  bigbutton: {
    bottom: 24,
    composes: ['is-absolute'],
    right: 24,
  },
  button: ({ theme }) => ({
    background: theme.colors.black,
    borderRadius: 28,
    color: theme.colors.white,
    composes: ['text-center', 'use-pointer'],
    fontSize: '2.2rem',
    height: 56,
    lineHeight: px(51),
    width: 56,
  }),
  icon: {},
});

const BigButton = React.memo(({ scrollTo }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.bigbutton}>
      <Tooltip
        useHover
        component={<Menu scrollTo={scrollTo} />}
        placement="top-end">
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
