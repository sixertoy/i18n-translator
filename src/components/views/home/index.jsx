import React, { useCallback } from 'react';
import { AiOutlineArrowRight as RightArrow } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../../assets/logo';
import { createProject } from '../../../redux/actions';
import GithubLogin from '../../commons/buttons/github';
import GoogleLogin from '../../commons/buttons/google';

const useStyles = createUseStyles({
  button: {
    background: '#000000',
    borderRadius: 4,
    color: '#FFFFFF',
    composes: ['is-block', 'px24', 'py12', 'fs18', 'text-center'],
    width: 250,
  },
  container: ({ theme }) => ({
    background: theme.header,
    composes: ['flex-rows', 'items-center', 'flex-center'],
  }),
  icon: {
    composes: ['ml12'],
  },
  logo: {
    color: '#FFFFFF',
    composes: ['text-center'],
    fontSize: 48,
    marginBottom: 48,
  },
  signin: {
    '& > p': { lineHeight: 1.15 },
    '& > p + p': { marginTop: 7 },
    color: '#FFFFFF',
    composes: ['fs16', 'mt64', 'text-center'],
    width: 350,
  },
  splitter: {
    composes: ['is-block', 'my24', 'text-center', 'fs18'],
  },
});

const StartViewComponent = () => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });

  const onDemoClick = useCallback(() => {
    dispatch(createProject());
    history.push('/import');
  }, [dispatch, history]);

  return (
    <div className={classes.container} id="home-view">
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.wrapper}>
        <GithubLogin login />
        <GoogleLogin login />
      </div>
      <span className={classes.splitter}>
        <span>-&nbsp;ou&nbsp;-</span>
      </span>
      <button className={classes.button} type="button" onClick={onDemoClick}>
        <span>Créer un projet</span>
        <RightArrow className={classes.icon} />
      </button>
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
    </div>
  );
};

export default StartViewComponent;
