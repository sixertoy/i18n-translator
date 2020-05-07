import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { USE_CONTEXT_LANG } from '../../../../features.json';
import { updateValue } from '../../../../redux/actions/translations';
import PercentageBar from '../../../commons/percentage-bar';
import Tooltip from './tooltip';

const useStyles = createUseStyles({
  column: ({ theme }) => ({
    marginLeft: 1,
    maxWidth: '65%',
    minWidth: theme.sizes.colwidth,
    width: theme.sizes.colwidth,
  }),
  header: ({ theme }) => ({
    background: '#F1F1F1',
    composes: [
      'fs14',
      'pl7',
      'py12',
      'is-bold',
      'flex-columns',
      'flex-start',
      'items-center',
    ],
    fontVariant: 'small-caps',
    height: theme.sizes.colheader,
  }),
  icon: ({ theme }) => ({
    '.notvalid &': { color: theme.red },
    color: theme.colors.gray,
    composes: ['px12', 'fs12'],
  }),
  input: ({ theme }) => ({
    '&::placeholder': { composes: ['fs12'], opacity: 0.35 },
    color: theme.font,
    composes: ['px7', 'fs14'],
    height: '100%',
    textOverflow: 'ellipsis',
    width: '100%',
  }),
  labels: {
    composes: ['flex-1', 'ml12'],
  },
  line: ({ theme }) => ({
    '&.even': { background: theme.even },
    '&.odd': { background: theme.odd },
    composes: ['flex-columns', 'flex-start', 'items-center'],
    height: theme.sizes.line,
    marginBottom: 1,
  }),
  percentage: {
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
});

const ColumnValuesComponent = ({ data: { label, lang, values } }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  return (
    <div className={classes.column}>
      <div className={classes.header}>
        {USE_CONTEXT_LANG && <Tooltip lang={lang} />}
        <div className={classes.labels}>
          <div>{label}</div>
          <PercentageBar
            className={classes.percentage}
            count={30}
            size="tiny"
            total={40}
          />
        </div>
      </div>
      <div className={classes.list}>
        {values.map(([key, value], index) => {
          const odd = index % 2;
          const even = !odd;
          const notvalid = !value || value === '';
          return (
            <div
              key={key}
              className={classnames(classes.line, { even, notvalid, odd })}>
              <input
                className={classes.input}
                placeholder="Enter a value"
                type="text"
                value={value}
                onChange={evt => {
                  evt.preventDefault();
                  const update = evt.target.value;
                  dispatch(updateValue({ key, lang, update }));
                }}
              />
              <span className={classes.icon}>
                <CheckIcon />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ColumnValuesComponent.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default ColumnValuesComponent;
