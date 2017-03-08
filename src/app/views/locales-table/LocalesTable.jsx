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
            height: '100%'
          }}>
          <LocalesTableHeaders langs={langs} />
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
                  values={values.map(obj => (obj[key] || ''))} />)}
            </div>
          </div>
        </div>
        {/*
          <table className="application-table"
          style={{
            width: '100%',
            height: '100%'
          }}>
          <thead style={{
            textAlign: 'center'
          }}>
            <tr style={{
            }}>
              <th className="table-cell-ellipsis"
                style={{
                  width: '8%',
                  padding: '12px',
                  textAlign: 'right'
                }}>
                <small>Primary Keys</small>
              </th>
              {langs.map(key => <th key={`header-${key}`}
                style={{
                  paddingRight: '0px',
                  padding: '12px 12px'
                }}>
                <span style={{
                  width: '100%',
                  display: 'block',
                  maxWidth: '400px'
                }}>{key}</span>
              </th>)}
            </tr>
          </thead>
          <tbody style={{
            overflowY: 'scroll',
            overflowX: 'hidden'
          }}>
            {primarykeys.map((key, index) =>
              <LocalesTableRow key={`row_${key}`}
                langs={langs}
                primarykey={key}
                odd={Boolean(index % 2)}
                facade={this.context.facade}
                values={values.map(obj => (obj[key] || ''))} />)}
          </tbody>
          </table>
        */}
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
  primarykeys: React.PropTypes.array.isRequired
};

export default LocalesTable;
