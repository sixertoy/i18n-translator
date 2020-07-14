import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { useFile } from '../../../../hooks';

const useStyles = createUseStyles({
  container: {
    composes: ['mb24'],
  },
  title: {
    composes: ['mb24', 'is-light'],
  },
});

const ProjectKeysComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { json, ref: upload } = useFile();

  const onUploadHandler = useCallback(() => {
    upload.current.click();
  }, [upload]);

  useEffect(() => {
    if (json) {
      console.log(json);
    }
  }, [json]);

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Importer</h2>
      <div className={classes.wrapper}>
        <input
          ref={upload}
          accept=".json,application/json"
          className="is-hidden"
          type="file"
        />
        <button type="button" onClick={onUploadHandler}>
          <span>Importer un fichier existant</span>
        </button>
      </div>
    </section>
  );
});

ProjectKeysComponent.defaultProps = {};

ProjectKeysComponent.propTypes = {};

export default ProjectKeysComponent;
