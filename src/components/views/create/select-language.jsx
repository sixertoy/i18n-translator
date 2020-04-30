import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'flex-centered', 'is-relative'],
    height: '100%',
    position: 'relative',
    width: '100%',
  },
});

const LANGUAGES = {
  // using language keys RFC 3066
  'de-DE': 'German',
  'en-US': 'English',
  'es-ES': 'Spanish',
  'fr-FR': 'French',
  'it-IT': 'Italian',
  'pt-PT': 'Portuguese',
};

const SelectLanguagesComponent = ({ langs, onClick }) => {
  const classes = useStyles();
  const languages = Object.entries(LANGUAGES);
  return (
    <div className={classes.container}>
      <h3>
        <span>Select language ?</span>
      </h3>
      <p
        style={{
          marginTop: '0',
        }}>
        {languages
          .filter(([key]) => langs.indexOf(key) === -1)
          .map(([key, val]) => (
            <label
              key={`radio-${key}`}
              htmlFor={key}
              style={{
                marginRight: '7px',
              }}>
              <input
                id={key}
                name="lang-radio-input"
                type="radio"
                value={key}
                onClick={e => onClick(e, key)}
              />
              <span
                style={{
                  marginLeft: '3px',
                }}>
                {val}
              </span>
            </label>
          ))}
      </p>
    </div>
  );
};

SelectLanguagesComponent.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SelectLanguagesComponent;
