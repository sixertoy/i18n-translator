import React from 'react';
import {
  AiOutlineCopy as CopyIcon,
  AiOutlineFileText as FileIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { USE_PROJECTS } from '../../../features.json';
import { selectPercentage } from '../../../redux/selectors';

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
  title: ({ theme }) => ({
    color: theme.odd,
    composes: ['is-bold'],
  }),
});

const ExportViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { items, project } = useSelector(selectPercentage);
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
      {items.map(({ label, lang, percent }) => {
        return (
          <div key={lang} className={classes.line}>
            <div className={classes.title}>
              <h5>{label}</h5>
              <span>{percent}%</span>
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
