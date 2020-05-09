import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  signin: {
    '& > p': { lineHeight: 1.15 },
    '& > p + p': { marginTop: 7 },
    color: '#FFFFFF',
    composes: ['fs16', 'mt64', 'text-center'],
    width: 350,
  },
});

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.signin}>
      <p className="is-bold">
        <span>Besoin de plus de projets ?</span>
      </p>
      <p>
        <Link className="is-underline" to="/home/signin">
          <span>Enregistrez vous</span>
        </Link>
      </p>
      <p className="is-italic">
        <span>
          Profitez de plus d&apos;espace pour gérer vos projets ainsi que de
          lorem ipsum dolor sit amet.
        </span>
      </p>
    </div>
  );
});

export default ReactDumbComponent;
