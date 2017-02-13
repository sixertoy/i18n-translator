import React from 'react';
import Helmet from 'react-helmet';
// lib
import './Application.css';
// import GithubStarButton from './../../core/views/GithubStarButton';
import ApplicationFooter from './ApplicationFooter';
import ApplicationHeader from './ApplicationHeader';
import ApplicationEditScreen from './ApplicationEditScreen';
import ApplicationExportPopin from './ApplicationExportPopin';
import GithubOctocatCorner from './../../core/views/GithubOctocatCorner';

class App extends React.Component {

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
      openpopin: false,
      translations: {}
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
  _onApplicationStoreChange ({ json, tablekeys, orders, locales, openpopin }) {
    this.setState({
      json,
      orders,
      locales,
      openpopin,
      tablekeys
    });
  }

  /* ------------------------------------------------

   Render Sub Components

  ------------------------------------------------ */

  _renderApplicationExportPopin () {
    if (!this.state.openpopin) {
      return false;
    }
    return (
      <ApplicationExportPopin facade={this.props.facade}
        json={this.state.json}
        locales={this.state.locales} />
    );
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
            <ApplicationHeader facade={this.props.facade} />
          </div>
          <ApplicationEditScreen orders={this.state.orders}
            locales={this.state.locales}
            tablekeys={this.state.tablekeys}
            facade={this.props.facade} />
          <ApplicationFooter version={this.props.version}
            facade={this.props.facade} />
        </div>
        {this._renderApplicationExportPopin()}
        <GithubOctocatCorner direction="left"
          username="sixertoy"
          projectname="i18n-translator" />
      </div>
    );
  }
}

App.propTypes = {
  version: React.PropTypes.string.isRequired,
  facade: React.PropTypes.object.isRequired
};

export default App;
