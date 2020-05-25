import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Blank from './blank';
import Empty from './empty';
import GridItem from './item-grid';
import ListItem from './item-list';

const useStyles = createUseStyles({
  factory: { composes: ['mb24'] },
  title: {
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: '1.15em' },
    composes: ['is-bold', 'fs16', 'mb16'],
  },
  wrapper: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const ListComponent = React.memo(
  ({ icon: Icon, items, label, useBlank, useEmpty, useGrid }) => {
    const classes = useStyles();
    return (
      <div className={classes.factory}>
        <h3 className={classes.title}>
          <Icon />
          <span>{label}</span>
        </h3>
        {useEmpty && <Empty label={label} />}
        <ul className={classes.wrapper}>
          {items.map(obj => (
            <React.Fragment key={obj.id}>
              {useGrid && <GridItem data={obj} />}
              {!useGrid && <ListItem data={obj} />}
            </React.Fragment>
          ))}
          {useBlank && <Blank key="blank" />}
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
