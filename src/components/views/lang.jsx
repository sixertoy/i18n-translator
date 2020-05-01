// import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'flex-center'],
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  label: {
    composes: ['mr7'],
  },
  span: {
    composes: ['ml3'],
  },
  wrapper: {
    composes: ['mt0'],
  },
});

const LANGS = {
  // using language keys RFC 3066
  'de-DE': 'German',
  'en-US': 'English',
  'es-ES': 'Spanish',
  'fr-FR': 'French',
  'it-IT': 'Italian',
  'pt-PT': 'Portuguese',
};

const SelectLangComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>
        <span>Select language</span>
      </h3>
      <div className={classes.wrapper}>
        {Object.entries(LANGS).map(([key, val]) => (
          <label key={`radio-${key}`} className={classes.label} htmlFor={key}>
            <input
              id={key}
              name="lang-radio-input"
              type="radio"
              value={key}
              onClick={evt => evt.preventDefault()}
            />
            <span className={classes.span}>{val}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

SelectLangComponent.defaultProps = {
  // langs: Object.keys(LANGS),
};

SelectLangComponent.propTypes = {
  // langs: PropTypes.arrayOf(PropTypes.string),
};

export default SelectLangComponent;
