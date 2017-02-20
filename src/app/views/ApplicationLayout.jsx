import React from 'react';
import Helmet from 'react-helmet';
import isempty from 'lodash.isempty';
// lib
import './Application.css';
// import GithubStarButton from './../../core/views/GithubStarButton';
import Constants from './../constants';
import ExportPopin from './popins/ExportPopin';
import ImportPopin from './popins/ImportPopin';
import ApplicationFooter from './ApplicationFooter';
import ApplicationHeader from './ApplicationHeader';
import ApplicationContent from './ApplicationContent';
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
      orders: [],
      locales: {},
      openpopin: false,
      primarykeys: false
    };
  }

  getChildContext () {
    return {
      facade: this.props.facade,
      theme: {
        love: '#DD4739',
        metal: '#34495E',
        velvet: '#661E75'
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
  _onApplicationStoreChange ({ json, primarykeys, orders, locales, openpopin }) {
    this.setState({
      json,
      orders,
      locales,
      openpopin,
      primarykeys
    });
  }

  /* ------------------------------------------------

   Render Sub Components

  ------------------------------------------------ */

  _renderApplicationPopin () {
    let view = Constants.REACT.NO_RENDER;
    if (!this.state.openpopin) {
      return view;
    }
    switch (this.state.openpopin) {
    case 'import':
      view = (
        <ImportPopin facade={this.props.facade}
          title={'Create a new language set'} />
        );
      break;
    case 'export':
      view = (
        <ExportPopin facade={this.props.facade}
          title={'Export languages'}
          json={this.state.json}
          locales={this.state.locales} />
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
          <ApplicationContent orders={this.state.orders}
            locales={this.state.locales}
            primarykeys={this.state.primarykeys} />
          <ApplicationFooter version={this.props.version}
            canexport={!isempty(this.state.primarykeys)} />
        </div>
        {this._renderApplicationPopin()}
        <GithubOctocatCorner direction="left"
          username="sixertoy"
          projectname="i18n-translator" />
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
