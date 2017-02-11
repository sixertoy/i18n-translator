import React from 'react';
import isempty from 'lodash.isempty';
import { AllHtmlEntities as entities } from 'html-entities';
// lib
import './Application.css';
import ApplicationPopin from './ApplicationPopin';
import ApplicationFooter from './ApplicationFooter';
import ApplicationHeader from './ApplicationHeader';

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
      orders: [],
      diff: null,
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

  _onApplicationStoreChange ({ orders, translations, diff }) {
    this.setState({
      orders,
      diff,
      translations
    });
  }

  _onInputChange (langkey, key, value) {
    const action = this.props.facade.getAction('ApplicationAction');
    action.updateLanguageValue({
      langkey, key, value
    });
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _renderTranslationKeys () {
    const orders = this.state.orders;
    const langs = this.state.translations;
    const keys = this.props.translationkeys;
    if (!langs || isempty(langs)) {
      return false;
    }
    return (
      Object.entries(keys)
        .map(([key, value]) => (
          <li key={`key_${key}`}
            style={{
              marginBottom: '22px'
            }}>
            <p style={{
              marginTop: '0',
              marginLeft: '12px',
              marginBottom: '5px'
            }}><em>{value}</em></p>
            <p style={{
              marginTop: '0',
              marginBottom: '3px'
            }}>
              {orders.map(langkey => <input type="text"
                style={{
                  marginTop: '0',
                  padding: '7px',
                  width: '240px',
                  marginLeft: '12px'
                }}
                onChange={(e) => {
                  this._onInputChange(langkey, key, e.target.value);
                }}
                key={`input_${key}_${langkey}`}
                defaultValue={entities.decode(langs[langkey][key] || '')} />)}
            </p>
            <p style={{
              marginTop: '0',
              marginBottom: '0',
              fontSize: '0.8em',
              marginLeft: '12px'
            }}><small>{key}</small></p>
          </li>
        )
    ));
  }

  /* ------------------------------------------------

   Render Sub Components

  ------------------------------------------------ */

  _renderApplicationPopin () {
    const popinvisible = !isempty(this.state.diff || false);
    console.log('popinvisible', popinvisible);
    if (!popinvisible) {
      return false;
    }
    return (
      <ApplicationPopin facade={this.props.facade}
        provider={this.state.diff} />
    );
  }

  /* ------------------------------------------------

   Main Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="application">
        <div className="flex-rows"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}>
          <ApplicationHeader langs={this.state.orders}
            facade={this.props.facade} />
          <div className="application-translations-list"
            style={{
              width: '100%',
              overflowY: 'scroll',
              overflowX: 'hidden'
            }}>
            <ul style={{
              width: '100%',
              padding: '20px',
              background: '#CCCCCC'
            }}>{this._renderTranslationKeys()}</ul>
          </div>
          <ApplicationFooter facade={this.props.facade} />
        </div>
        {this._renderApplicationPopin()}
      </div>
    );
  }
}

App.propTypes = {
  facade: React.PropTypes.object.isRequired,
  translationkeys: React.PropTypes.object.isRequired
};

export default App;
