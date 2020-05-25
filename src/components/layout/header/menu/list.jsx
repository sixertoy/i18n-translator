import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { rgba } from '../../../../core/utils';
import Item from './item';

const useStyles = createUseStyles({
  container: {
    composes: ['p12', 'no-overflow'],
  },
  list: {
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
  },
  title: {
    '& span': {
      letterSpacing: '0.075em',
      marginLeft: 5,
      verticalAlign: 'bottom',
    },
    '& svg': { fontSize: '1.15em' },
    color: rgba('#000000', 0.45),
    composes: ['is-normal', 'fs12', 'is-uppercase', 'mb7'],
  },
});

const ListComponent = React.memo(({ icon: Icon, items, label, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h6 className={classes.title}>
          <Icon />
          <span>{label}</span>
        </h6>
        <ul className={classes.list}>
          {items.map(obj => (
            <Item key={obj.id} data={obj} onClick={onClick} />
          ))}
        </ul>
      </div>
    </div>
  );
});

ListComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListComponent;
