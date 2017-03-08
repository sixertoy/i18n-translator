import React from 'react';
// project
import LocalesTableRow from './LocalesTableRow';
import LocalesTableHeaders from './LocalesTableHeaders';

class LocalesTable extends React.PureComponent {

  /* ------------------------------------------------

   Statics

  ------------------------------------------------ */

  /* ------------------------------------------------

   React Lifecycle

  ------------------------------------------------ */

  constructor (props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  /* ------------------------------------------------

   Privates

  ------------------------------------------------ */

  _onHeadersClickHandler (evt, key) {
    evt.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.toggleColumn(key);
  }

  /* ------------------------------------------------

   Sub Components Render

  ------------------------------------------------ */

  /* ------------------------------------------------

   Render

  ------------------------------------------------ */

  render () {
    const langs = this.props.langs;
    const values = this.props.values;
    const primarykeys = this.props.primarykeys;
    return (
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative'
      }}>
        <div className="table flex-rows"
          style={{
            width: '100%',
            height: '100%',
            borderTop: '1px solid #ECECEC'
          }}>
          <LocalesTableHeaders langs={langs}
            collapsed={this.props.collapsed}
            ontoggle={(...rest) => this._onHeadersClickHandler(...rest)} />
          <div className="scrollable"
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflowY: 'scroll',
              overflowX: 'hidden'
            }}>
            <div className="table-body"
              style={{
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                position: 'absolute'
              }}>
              {primarykeys.map((key, index) =>
                <LocalesTableRow key={`row_${key}`}
                  langs={langs}
                  primarykey={key}
                  odd={Boolean(index % 2)}
                  facade={this.context.facade}
                  collapsed={this.props.collapsed}
                  values={values.map(obj => (obj[key] || ''))} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocalesTable.contextTypes = {
  theme: React.PropTypes.object,
  facade: React.PropTypes.object
};

LocalesTable.propTypes = {
  langs: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  collapsed: React.PropTypes.array.isRequired,
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
