import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import PercentageBar from '../../../commons/percentage-bar';
import { useProject } from '../../../hooks';

const useStyles = createUseStyles({
  infos: {
    composes: ['flex-1'],
  },
  percentage: {
    composes: ['mt7'],
    maxWidth: '65%',
    minWidth: '65%',
    width: '65%',
  },
  title: ({ theme }) => ({
    color: theme.triangle,
    composes: ['is-bold'],
  }),
});

const InfosComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const project = useProject();
  return (
    <div className={classes.infos}>
      <h3 className={classes.title}>
        <span>{project.name}</span>
      </h3>
      <PercentageBar
        showPercent
        className={classes.percentage}
        count={project.count}
        size="normal"
        total={project.total}
      />
    </div>
  );
});

export default InfosComponent;
