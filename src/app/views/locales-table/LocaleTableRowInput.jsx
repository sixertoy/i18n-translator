import React from 'react';
import { AllHtmlEntities as entities } from 'html-entities';

class LocaleTableRowInput extends React.PureComponent {

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {};
    this._keyboardTimeout = null;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  /**
   * Called when user enter a new value into an language/key input
   * Using a timeout between each key input
   */
  _onInputChange (primarykey, value) {
    const lang = this.props.lang;
    const action = this.props.facade.getAction('ApplicationAction');
    if (this._keyboardTimeout) {
      clearTimeout(this._keyboardTimeout);
    }
    this._keyboardTimeout = setTimeout(() => {
      action.updateValue({ primarykey, value, lang });
      this._keyboardTimeout = null;
    }, 300);
  }

  /**
   * Called before user's input change, will update input size
   */
  _onAutoSizeChange (target, pkey) {
    // eslint-disable-next-line
    target.style.height = `${(target.scrollHeight)}px`;
    this._onInputChange(pkey, target.value);
  }

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    const pkey = this.props.primarykey;
    const value = entities.decode(this.props.value || '');
    return (
      <textarea key={`textarea-${pkey}`}
        rows="1"
        style={{
          marginTop: '0',
          padding: '7px',
          maxWidth: '350px'
        }}
        className="autosize"
        defaultValue={value}
        onChange={e => this._onAutoSizeChange(e.target, pkey)} />
    );
  }

}

LocaleTableRowInput.propTypes = {
  lang: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  facade: React.PropTypes.object.isRequired,
  primarykey: React.PropTypes.string.isRequired
};

export default LocaleTableRowInput;
