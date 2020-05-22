import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import Brand from '../layout/brand';

const useStyles = createUseStyles({
  backhome: {
    color: '#787878',
    display: 'block',
    fontSize: 12,
    opacity: 0.55,
  },
  container: {
    background: '#F1F1F1',
    color: '#787878',
    minHeight: '100%',
    minWidth: '100%',
    padding: '50px 0 40px 0',
  },
  logo: {
    color: '#787878',
    display: 'block',
  },
  subtitle: {
    fontWeight: 700,
    margin: '0 auto 60px auto',
  },
  text: {
    fontSize: 16,
    lineHeight: '1.4em',
    margin: '0 auto 60px auto',
    width: 440,
  },
  title: {
    fontSize: 60,
    fontWeight: 100,
    margin: '0 auto 124px auto',
  },
  translations: {
    '& span': { margin: '0 2px' },
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 100,
    left: '50%',
    lineHeight: '1.2em',
    marginLeft: `-${410 / 2}px`,
    opacity: 0.25,
    position: 'absolute',
    top: 70,
    width: 410,
  },
  wrapper: {
    margin: '0 auto',
    position: 'relative',
    textAlign: 'center',
    width: 600,
  },
});

const ErrorViewComponent = React.memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <span>404</span>
        </h1>
        <h3 className={classes.translations}>
          <div>
            <span>Quatre Cent Quatre</span>
            <span>.</span>
            <span>錯誤404</span>
            <span>.</span>
            <span>Vierhundertvier</span>
          </div>
          <div>
            <span>Four Hundred and Four</span>
            <span>.</span>
            <span>Четыреста четыре</span>
          </div>
          <div>
            <span>Quattrocentoquattro</span>
            <span>.</span>
            <span>Kvar Cent kaj Kvar</span>
            <span>.</span>
            <span>四百と四</span>
          </div>
          <div>
            <span>أربعمائة وأربعة</span>
            <span>.</span>
            <span>Cuatrocientos Cuatro</span>
            <span>.</span>
          </div>
          <div>
            <span>Quatrocentos e quatro</span>
            <span>.</span>
            <span>ארבע מאות וארבע</span>
          </div>
        </h3>
        <h6 className={classes.subtitle}>
          <span>Oups, la page demandée n&apos;existe pas.</span>
        </h6>
        <div className={classes.text}>
          <p>
            Le lien que vous avez entré ne semble pas être un lien Typpo valide.
            Si quelqu&apos;un vous l&apos;a transmis, nous vous conseillons de
            lui demander de vérifier son exactitude.
          </p>
          <Link className={classes.backhome} to="/">
            <span>Retour à l&apos;acceuil</span>
          </Link>
        </div>
        <Brand className={classes.logo} />
      </div>
    </div>
  );
});

export default ErrorViewComponent;
