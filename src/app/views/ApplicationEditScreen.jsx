import React from 'react';
import isempty from 'lodash.isempty';
import { AllHtmlEntities as entities } from 'html-entities';
// project
import { ObjectUtils } from './../../core/utils';

class ApplicationEditScreen extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  componentDidUpdate () {
    if (!this._initialized) {
      // eslint-disable-next-line
      this._initialized = true;
      document.querySelectorAll('.autosize')
        // eslint-disable-next-line
        .forEach(elt => (elt.style.height = `${(elt.scrollHeight)}px`));
    }
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /**
   * Called when user enter a new value into an language/key input
   */
  _onInputChange (langkey, key, value) {
    const action = this.props.facade.getAction('ApplicationAction');
    action.updateValue({
      langkey, key, value
    });
  }

  _onAutoSizeChange (target, langkey, key) {
    const value = target.value;
    // eslint-disable-next-line
    target.style.height = `${(target.scrollHeight)}px`;
    this._onInputChange(langkey, key, value);
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  _renderInput (langkey, key, values) {
    const value = entities.decode(values[langkey][key] || '');
    return (
      <textarea type="text"
        rows="1"
        style={{
          marginTop: '0',
          padding: '7px',
          width: '350px',
          marginLeft: '12px'
        }}
        className="autosize"
        defaultValue={value}
        key={`${langkey}_${key}`}
        onChange={e => this._onAutoSizeChange(e.target, langkey, key)} />
    );
  }

  _renderTranslations () {
    const orders = this.props.orders;
    const locales = this.props.locales;
    const keys = this.props.primarykeys;
    if (!locales || isempty(locales)) {
      return false;
    }
    return (
      ObjectUtils.entries(keys)
        .map(([key, value]) => (
          <li key={`key_${key}`}
            style={{
              marginBottom: '22px'
            }}>
            <p style={{
              marginTop: '0',
              color: '#CCCCCC',
              marginBottom: '0',
              fontSize: '0.9em',
              marginLeft: '12px'
            }}><small>{`#${key}`}</small></p>
            <p style={{
              marginTop: '0',
              marginLeft: '12px',
              marginBottom: '5px'
            }}><em>{value}</em></p>
            <p className="flex-columns"
              style={{
                marginTop: '0',
                marginBottom: '3px'
              }}>
              {orders.map(langkey => this._renderInput(langkey, key, locales))}
            </p>
          </li>
        )
    ));
  }

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    return (
      <div className="application-screen">
        <div className="application-translations-list">
          <ul style={{
            width: '100%',
            padding: '20px'
          }}>{this._renderTranslations()}</ul>
        </div>
      </div>
    );
  }

}

ApplicationEditScreen.defaultProps = {
  orders: [],
  locales: {},
  primarykeys: {}
};

ApplicationEditScreen.propTypes = {
  orders: React.PropTypes.array,
  locales: React.PropTypes.object,
  primarykeys: React.PropTypes.object,
  facade: React.PropTypes.object.isRequired
};

export default ApplicationEditScreen;
