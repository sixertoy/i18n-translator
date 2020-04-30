/* globals ga */
// application
import './Application.css';

import isempty from 'lodash.isempty';
import React from 'react';
import Helmet from 'react-helmet';

import GithubOctocatCorner from '../core/views/GithubOctocatCorner';
// lib
import GoogleAnalytics from '../core/views/GoogleAnalytics';
import Constants from './constants';
import ApplicationFooter from './views/ApplicationFooter';
import ApplicationHeader from './views/ApplicationHeader';
import ApplicationMenu from './views/ApplicationMenu';
import LocalesTable from './views/locales-table/LocalesTable';
import ConnectScreen from './views/screens/ConnectScreen';
import ExportScreen from './views/screens/ExportScreen';
// screens
import ImportScreen from './views/screens/ImportScreen';

class ApplicationLayout extends React.Component {
  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   Constructor

  ------------------------------------------------ */

  constructor(props) {
    super(props);
    this.state = {
      json: {},
      langs: [],
      openscreen: Constants.SCREENS.CONNECT,
      primarykeys: [],
      selectexport: 0,
      // default/home screen
      values: [],
    };
  }

  getChildContext() {
    return {
      facade: this.props.facade,
      theme: {
        grey: '#B9B9B9',
        greylight: '#EEEEEE',
        love: '#DD4739',
        metal: '#34495E',
        velvet: '#661E75',
      },
    };
  }

  componentDidMount() {
    const store = this.props.facade.getStore('ApplicationStore');
    store.subscribe(s => this._onApplicationStoreChange(s));
  }

  componentWillUnmount() {
    const store = this.props.facade.getStore('ApplicationStore');
    store.unsubscribe(s => this._onApplicationStoreChange(s));
  }

  /* ------------------------------------------------

   Listeners

  ------------------------------------------------ */

  /**
   * Called when application's store emit changes
   */
  _onApplicationStoreChange(state) {
    this.setState({
      collapsed: state.collapsed,
      json: state.json,
      langs: state.langs,
      openscreen: state.openscreen,
      primarykeys: state.primarykeys,
      selectexport: state.selectexport,
      values: state.values,
    });
  }

  /* ------------------------------------------------

   Render Sub Components

  ------------------------------------------------ */

  _renderApplicationScreen() {
    let view;
    // eslint-disable-next-line
    // console.log('DEBUG :: this.props.openscreen', this.state.openscreen);
    switch (this.state.openscreen) {
      case Constants.SCREENS.IMPORT:
        view = (
          <ImportScreen
            facade={this.context.facade}
            langs={this.state.langs}
            primarykeys={this.state.primarykeys}
            title="Create a new language set"
          />
        );
        break;
      case Constants.SCREENS.EXPORT:
        view = (
          <ExportScreen
            facade={this.context.facade}
            json={this.state.json}
            langs={this.state.langs}
            selectexport={this.state.selectexport}
            title="Export languages"
            values={this.state.values}
          />
        );
        break;
      case Constants.SCREENS.EDIT:
        view = (
          <LocalesTable
            collapsed={this.state.collapsed}
            facade={this.context.facade}
            langs={this.state.langs}
            primarykeys={this.state.primarykeys}
            values={this.state.values}
          />
        );
        break;
      default:
      case Constants.SCREENS.CONNECT:
        view = (
          <ConnectScreen
            facade={this.context.facade}
            json={this.state.json}
            langs={this.state.langs}
            title="Export languages"
            values={this.state.values}
          />
        );
        break;
    }
    return view;
  }

  /* ------------------------------------------------

   Main Render

  ------------------------------------------------ */

  render() {
    const classes = isempty(this.state.primarykeys)
      ? 'flex-centered'
      : 'flex-start';
    return (
      <div
        className="application"
        style={{
          bottom: '0',
          left: '0',
          position: 'absolute',
          right: '0',
          top: '0',
        }}>
        <Helmet
          meta={[
            {
              content: 'Helmet application',
              name: 'description',
            },
            {
              content: 'article',
              property: 'og:type',
            },
          ]}
        />
        <div
          className="flex-rows"
          style={{
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}>
          <div
            className="shadow-bottom"
            style={{
              background: '#FBFBFB',
              position: 'relative',
              width: '100%',
            }}>
            <ApplicationHeader appname={this.props.appname} />
          </div>
          <ApplicationMenu
            canadd={this.state.openscreen !== Constants.SCREENS.CONNECT}
            canexport={!isempty(this.state.values)}
            canshow={this.state.openscreen !== Constants.SCREENS.CONNECT}
            isexport={this.state.openscreen === Constants.SCREENS.EXPORT}
            langs={this.state.langs}
            selectexport={this.state.selectexport}
          />
          <div
            className={`application-layout-content flex-grow-and-shrink flex-rows ${classes}`}
            style={{
              background: '#FBFBFB',
              fontSize: '1.2em',
              height: '100%',
              position: 'relative',
              width: '100%',
            }}>
            {this._renderApplicationScreen()}
          </div>
          <ApplicationFooter
            canexport={!isempty(this.state.primarykeys)}
            version={this.props.version}
          />
        </div>
        <GithubOctocatCorner
          direction="left"
          projectname="i18n-translator"
          username="sixertoy"
        />
        <GoogleAnalytics
          onload={() => {
            ga('create', 'UA-92648806-1', 'auto');
            ga('send', 'pageview', 'index.html');
          }}
        />
      </div>
    );
  }
}

ApplicationLayout.childContextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

ApplicationLayout.propTypes = {
  appname: React.PropTypes.string.isRequired,
  facade: React.PropTypes.object.isRequired,
  version: React.PropTypes.string.isRequired,
};

export default ApplicationLayout;
