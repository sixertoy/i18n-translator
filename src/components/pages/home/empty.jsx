import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  empty: {
    background: '#FAFBFC',
    border: '1px dashed #42526E',
    composes: ['mt7', 'p24', 'rnd3'],
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
