import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useParams } from 'react-router-dom';

import CellValue from '../cells/value';
import Header from '../header';

const useStyles = createUseStyles({
  container: {},
});

const ValuesColumnComponent = React.memo(({ index, item }) => {
  const { id } = useParams();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { collapsed, label, lang, translations } = item;
  const values = Object.entries(translations);
  return (
    <div key={lang} className={classes.column}>
      <Header collapsed={collapsed} index={index} label={label} lang={lang} />
      {values.map(([key, value], index) => {
        const odd = Boolean(index % 2);
        return (
          <CellValue
            key={key}
            lang={lang}
            odd={odd}
            project={id}
            value={value}
          />
        );
      })}
    </div>
  );
});

ValuesColumnComponent.defaultProps = {};

ValuesColumnComponent.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape().isRequired,
};

export default ValuesColumnComponent;
