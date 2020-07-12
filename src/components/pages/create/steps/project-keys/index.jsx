import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ProjectKeysComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <button type="button">
        <span>Cliquez ici pour importer un fichier existant</span>
      </button>
    </div>
  );
});

ProjectKeysComponent.defaultProps = {};

ProjectKeysComponent.propTypes = {};

export default ProjectKeysComponent;
