import Tippy from '@tippyjs/react';
import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { USE_CONTEXT_LANG } from '../../../features.json';
import {
  clearLanguage,
  removeLanguage,
} from '../../../redux/actions/translations';
import { selectHeader } from '../../../redux/selectors';
import PercentageBar from '../../commons/percentage-bar';

const useStyles = createUseStyles({
  headers: {
    background: '#F1F1F1',
    composes: ['py12'],
    height: 55,
  },
  icon: {
    composes: ['mr7'],
  },
  keys: ({ theme }) => ({
    fontSize: 18,
    maxWidth: theme.sizes.keycol,
    minWidth: theme.sizes.keycol,
    paddingLeft: 34,
    width: theme.sizes.keycol,
  }),
  labels: {
    composes: ['mr24'],
  },
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  values: ({ theme }) => ({
    composes: ['fs14', 'pl7', 'is-bold'],
    fontVariant: 'small-caps',
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
});

const HeadersComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const headers = useSelector(selectHeader);
  return (
    <div className={classes.headers}>
      <div className={classes.keys}>
        <KeyIcon />
      </div>
      {headers.map(({ count, label, lang, total }) => (
        <div key={lang} className={classes.values}>
          {USE_CONTEXT_LANG && (
            <Tippy
              hideOnClick
              interactive
              content={() => {
                return (
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(clearLanguage(lang));
                      }}>
                      <span>Clear</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(removeLanguage(lang));
                      }}>
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
          )}
          <div className={classes.labels}>
            <div>{label}</div>
            <PercentageBar
              className={classes.percentage}
              count={count}
              size="tiny"
              total={total}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeadersComponent;
