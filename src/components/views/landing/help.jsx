import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  link: ({ theme }) => ({
    color: theme.colors.white,
    composes: ['is-bold', 'is-underline'],
  }),
  signin: ({ theme }) => ({
    '& > p': { lineHeight: 1.15 },
    '& > p + p': { marginTop: 7 },
    color: theme.colors.white,
    composes: ['fs16', 'mt64', 'text-center'],
    width: 350,
  }),
});

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.signin}>
      <p>
        <span>Besoin de plus de projets ?</span>
      </p>
      <p>
        <Link className={classes.link} to="/signin">
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
