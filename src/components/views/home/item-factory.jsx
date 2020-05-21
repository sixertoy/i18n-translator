import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import Blank from './blank';
import Empty from './empty';
import GridItem from './item-grid';
import ListItem from './item-list';

const useStyles = createUseStyles({
  container: { composes: ['mb24'] },
  title: {
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: '1.15em' },
    composes: ['is-bold', 'fs16'],
  },
  wrapper: {
    composes: ['mt7', 'flex-columns', 'flex-wrap'],
  },
});

const ListComponent = React.memo(
  ({ icon: Icon, items, label, useBlank, useEmpty, useGrid }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
      <div className={classes.container}>
        <h3 className={classes.title}>
          <Icon />
          <span>{label}</span>
        </h3>
        {useEmpty && <Empty />}
        <ul className={classes.wrapper}>
          {items.map(obj => (
            <React.Fragment>
              {useGrid && <GridItem key={obj.id} data={obj} />}
              {!useGrid && <ListItem key={obj.id} data={obj} />}
            </React.Fragment>
          ))}
          {useBlank && <Blank />}
        </ul>
      </div>
    );
  }
);

ListComponent.defaultProps = {
  useBlank: false,
  useEmpty: false,
  useGrid: false,
};

ListComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
  useBlank: PropTypes.bool,
  useEmpty: PropTypes.bool,
  useGrid: PropTypes.bool,
};

export default ListComponent;
