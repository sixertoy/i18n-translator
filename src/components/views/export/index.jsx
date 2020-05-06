import React from 'react';
import {
  AiOutlineCopy as CopyIcon,
  AiOutlineFileText as FileIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { USE_PROJECTS } from '../../../features.json';
import { selectPercentages } from '../../../redux/selectors';
import PercentageBar from '../../commons/percentage-bar';

const useStyles = createUseStyles({
  button: {
    background: 'transparent',
    composes: ['fs24'],
  },
  export: {
    composes: ['flex-rows', 'flex-center', 'items-center', 'is-full-height'],
  },
  line: ({ theme }) => ({
    '&:hover': { background: theme.header },
    background: theme.font,
    borderRadius: 12,
    composes: [
      'flex-columns',
      'flex-between',
      'items-center',
      'py12',
      'px12',
      'my12',
    ],
    height: 60,
    maxHeight: 60,
    maxWidth: '60%',
    minHeight: 60,
    minWidth: 420,
    width: '60%',
  }),
  percentage: {
    composes: ['mt5'],
    width: 200,
  },
  title: ({ theme }) => ({
    color: theme.odd,
    composes: ['is-bold'],
    width: 'auto',
  }),
});

const ExportViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { project, ...items } = useSelector(selectPercentages);
  return (
    <div className={classes.export}>
      {USE_PROJECTS && (
        <div className={classes.line} type="button">
          <div className={classes.title}>
            <h4>Projet</h4>
            <span>{project.percent}%</span>
          </div>
          <div className={classes.actions}>
            <button className={classes.button} type="button" onClick={() => {}}>
              <CopyIcon />
            </button>
            <button className={classes.button} type="button" onClick={() => {}}>
              <FileIcon />
            </button>
          </div>
        </div>
      )}
      {Object.entries(items)
        .map(([lang, values]) => ({ lang, ...values }))
        .map(({ count, label, lang, total }) => {
          return (
            <div key={lang} className={classes.line}>
              <div className={classes.title}>
                <h5>{label}</h5>
                <PercentageBar
                  className={classes.percentage}
                  count={count}
                  size="small"
                  total={total}
                />
              </div>
              <div className={classes.actions}>
                <button
                  className={classes.button}
                  type="button"
                  onClick={() => {}}>
                  <CopyIcon />
                </button>
                <button
                  className={classes.button}
                  type="button"
                  onClick={() => {}}>
                  <FileIcon />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

ExportViewComponent.defaultProps = {};

ExportViewComponent.propTypes = {};

export default ExportViewComponent;
