import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
// import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import {
  clearLanguage,
  removeLanguage,
} from '../../../../redux/actions/translations';

// const useStyles = createUseStyles({
//   button: {},
// });

const TooltipComponent = ({ lang }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Tippy
      hideOnClick
      interactive
      content={() => {
        return (
          <div>
            <button type="button" onClick={() => dispatch(clearLanguage(lang))}>
              <span>Clear</span>
            </button>
            <button
              type="button"
              onClick={() => dispatch(removeLanguage(lang))}>
              <span>Remove</span>
            </button>
          </div>
        );
      }}
      placement="bottom"
      trigger="click">
      <div>
        <ContextIcon />
      </div>
    </Tippy>
  );
};

TooltipComponent.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default TooltipComponent;
