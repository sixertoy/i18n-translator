import isEmpty from 'lodash.isempty';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  list: {},
  title: {},
});

const ListComponent = React.memo(({ icon: Icon, items, label }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.list}>
      <h3 className={classes.title}>
        <Icon />
        <span>{label}</span>
      </h3>
      <div className={classes.wrapper}>
        {isEmpty(items) && <span>Aucun projet</span>}
        {items.map(obj => (
          <div key={obj.id}>
            <Link to={`/board/${obj.id}`}>{obj.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
});

ListComponent.propTypes = {
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  label: PropTypes.string.isRequired,
};

export default ListComponent;
