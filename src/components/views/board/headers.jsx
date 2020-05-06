import React from 'react';
import { AiOutlineEllipsis as ContextIcon } from 'react-icons/ai';
import { IoMdKey as KeyIcon } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { USE_CONTEXT_LANG } from '../../../features.json';
import { selectHeader } from '../../../redux/selectors';
import PercentageBar from '../../commons/percentage-bar';

const useStyles = createUseStyles({
  headers: {
    composes: ['py12', 'flex-0'],
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
    composes: ['flex-rows', 'mr24'],
  },
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  values: ({ theme }) => ({
    composes: ['flex-1', 'fs14', 'pl7', 'is-bold'],
    fontVariant: 'small-caps',
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  wrapper: {
    composes: ['flex-columns', 'items-center'],
  },
});

const HeadersComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const headers = useSelector(selectHeader);
  return (
    <div className={classes.headers}>
      <div className={classes.wrapper}>
        <div className={classes.keys}>
          <KeyIcon />
        </div>
        {headers.map(({ count, label, lang, total }) => (
          <div key={lang} className={classes.values}>
            {USE_CONTEXT_LANG && (
              <button className={classes.icon} type="button" onClick={() => {}}>
                <ContextIcon />
              </button>
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
    </div>
  );
};

export default HeadersComponent;
