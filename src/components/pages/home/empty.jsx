import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { rgba } from '../../../core/utils';

const useStyles = createUseStyles({
  empty: {
    borderColor: rgba('#000000', 0.2),
    borderStyle: 'dashed',
    borderWidth: 1,
    color: rgba('#000000', 0.2),
    composes: ['p24', 'rnd3', 'no-background'],
    width: '100%',
  },
});

const EmptyComponent = React.memo(({ label }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const lcLabel = label.toLowerCase();
  return (
    <div className={classes.empty}>
      <span>Vos projets {lcLabel} s&apos;afficheront ici</span>
    </div>
  );
});

EmptyComponent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default EmptyComponent;
