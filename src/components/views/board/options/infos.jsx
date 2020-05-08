import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

import { USE_PROJECTS } from '../../../../features.json';
import { selectPercentages } from '../../../../redux/selectors';
import PercentageBar from '../../../commons/percentage-bar';

const useStyles = createUseStyles({
  infos: {
    composes: ['no-flex'],
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

const InfosComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { project } = useSelector(selectPercentages);
  return (
    <div className={classes.infos}>
      {USE_PROJECTS && (
        <h3 className={classes.title}>
          <span>Nom du projet</span>
        </h3>
      )}
      <PercentageBar
        showPercent
        className={classes.percentage}
        count={project.count}
        size="normal"
        total={project.total}
      />
    </div>
  );
};

InfosComponent.defaultProps = {};

InfosComponent.propTypes = {};

export default InfosComponent;
