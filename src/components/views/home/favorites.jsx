// import get from 'lodash.get';
import React from 'react';
import { AiOutlineStar as StarIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

// import { FirebaseAuthConsumer } from '../../../core/firebase';

const useStyles = createUseStyles({
  container: {},
  title: {},
  wrapper: {},
});

const FavoritesComponent = React.memo(({ user }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  console.log('user', user);
  // const items = useSelector(selectFavorites);

  return (
    <div className={classes.favorites}>
      <h3 className={classes.title}>
        <StarIcon />
        <span>Vos Favoris</span>
      </h3>
      <div className={classes.wrapper} />
    </div>
    // <FirebaseAuthConsumer>
    //   {({ user }) => {
    //     const isAnonymous = get(user, 'isAnonymous');
    //     return (
    //       <div className={classes.favorites}>
    //         <h3 className={classes.title}>
    //           <StarIcon />
    //           <span>Vos Favoris</span>
    //         </h3>
    //         <div className={classes.wrapper} />
    //       </div>
    //     );
    //   }}
    // </FirebaseAuthConsumer>
  );
});

FavoritesComponent.defaultProps = {};

FavoritesComponent.propTypes = {};

export default FavoritesComponent;
