/* globals ga */
import React from 'react';
import Helmet from 'react-helmet';
import isempty from 'lodash.isempty';
// lib
import './Application.css';
import Constants from './../constants';
import ExportScreen from './screens/ExportScreen';
import ImportScreen from './screens/ImportScreen';
import ApplicationMenu from './ApplicationMenu';
import ApplicationFooter from './ApplicationFooter';
import ApplicationHeader from './ApplicationHeader';
import GoogleAnalytics from './../../core/views/GoogleAnalytics';
import ApplicationLayoutContent from './ApplicationLayoutContent';
import GithubOctocatCorner from './../../core/views/GithubOctocatCorner';

class Application extends React.Component {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   Constructor

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {
      json: {},
      langs: [],
      values: [],
      primarykeys: [],
      openscreen: false
    };
  }

  getChildContext () {
    return {
      facade: this.props.facade,
      theme: {
        grey: '#B9B9B9',
        love: '#DD4739',
        metal: '#34495E',
        velvet: '#661E75',
        greylight: '#E3E3E3'
      }
    };
  }

  componentDidMount () {
    const store = this.props.facade.getStore('ApplicationStore');
    store.subscribe(s => this._onApplicationStoreChange(s));
  }

  componentWillUnmount () {
    const store = this.props.facade.getStore('ApplicationStore');
    store.unsubscribe(s => this._onApplicationStoreChange(s));
  }

  /* ------------------------------------------------

   Listeners

  ------------------------------------------------ */

  /**
   * Called when application's store emit changes
   */
  _onApplicationStoreChange (state) {
    this.setState({
      json: state.json,
      langs: state.langs,
      values: state.values,
      openscreen: state.openscreen,
      primarykeys: state.primarykeys
    });
  }

  /* ------------------------------------------------

   Render Sub Components

  ------------------------------------------------ */

  _renderApplicationScreen () {
    let view = Constants.REACT.NO_RENDER;
    switch (this.state.openscreen) {
    case 'import':
      view = (
        <ImportScreen facade={this.props.facade}
          title={'Create a new language set'}
          langs={this.state.langs}
          primarykeys={this.state.primarykeys} />
        );
      break;
    case 'export':
      view = (
        <ExportScreen facade={this.props.facade}
          title={'Export languages'}
          json={this.state.json}
          langs={this.state.langs}
          values={this.state.values} />
        );
      break;
    default:
      break;
    }
    return view;
  }

  /* ------------------------------------------------

   Main Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="application"
        style={{
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          position: 'absolute'
        }}>
        <Helmet meta={[{
          name: 'description',
          content: 'Helmet application'
        }, {
          property: 'og:type',
          content: 'article'
        }]} />
        <div className="flex-rows"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}>
          <div className="shadow-bottom"
            style={{
              width: '100%',
              position: 'relative',
              background: '#FBFBFB'
            }}>
            <ApplicationHeader appname={this.props.appname} />
          </div>
          {<ApplicationMenu canexport={!isempty(this.state.values)}
            canadd />}
          <ApplicationLayoutContent langs={this.state.langs}
            values={this.state.values}
            primarykeys={this.state.primarykeys} />
          <ApplicationFooter version={this.props.version}
            canexport={!isempty(this.state.primarykeys)} />
        </div>
        {this._renderApplicationScreen()}
        <GithubOctocatCorner direction="left"
          username="sixertoy"
          projectname="i18n-translator" />
        <GoogleAnalytics onload={() => {
          ga('create', 'UA-92648806-1', 'auto');
          ga('send', 'pageview', 'index.html');
        }} />
      </div>
    );
  }
}

Application.childContextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

Application.propTypes = {
  appname: React.PropTypes.string.isRequired,
  version: React.PropTypes.string.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default Application;
