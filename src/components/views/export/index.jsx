import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { selectTranslations } from '../../../redux/selectors';

const useStyles = createUseStyles({
  export: {},
});

const sortLanguageByLabelAsc = (a, b) => {
  if (a.label > b.label) return 1;
  if (a.label < b.label) return -1;
  return 0;
};

const ExportViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const items = useSelector(selectTranslations);
  return (
    <div className={classes.export}>
      <button type="button" onClick={() => {}}>
        <span>Projet</span>
      </button>
      {items.sort(sortLanguageByLabelAsc).map(obj => {
        return (
          <button key={obj.lang} type="button" onClick={() => {}}>
            <span>{obj.label}</span>
          </button>
        );
      })}
    </div>
  );
};

ExportViewComponent.defaultProps = {};

ExportViewComponent.propTypes = {};

export default ExportViewComponent;
