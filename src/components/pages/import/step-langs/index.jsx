import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { DEFAULT_LANGUAGES } from '../../../../constants';
import { selectLangs } from '../../../../redux/selectors';
import useStepStyles from '../styles';
import useStep from '../use-step';
import { getDisableLanguages } from './utils';

const useStyles = createUseStyles({
  container: {
    marginTop: '8%',
  },
});

const StepLangComponent = ({ index }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const stepClasses = useStepStyles({ theme });
  const { draft, onStepChange } = useStep(index);
  const input = useRef(null);

  const langs = useSelector(state => selectLangs(state, draft.id));
  const options = getDisableLanguages(langs, DEFAULT_LANGUAGES);

  const onChange = useCallback(
    evt => {
      evt.preventDefault();
      const lang = input.current.value;
      onStepChange({ lang });
    },
    [onStepChange]
  );

  return (
    <div className={classes.container} id="step-select">
      <div className={stepClasses.form}>
        <div className={stepClasses.field}>
          <span className={stepClasses.label} htmlFor="select.lang">
            <span>Séléctionner</span>
          </span>
          <select
            ref={input}
            className={stepClasses.select}
            defaultValue={input.current}
            name="select.lang"
            placeholder="Sélectionner une langue"
            onChange={onChange}>
            <option className={stepClasses.options} value="">
              Sélectionner une langue
            </option>
            {options.map(([key, label, disabled]) => (
              <option
                key={key}
                className={stepClasses.options}
                disabled={disabled}
                value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

StepLangComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepLangComponent;
