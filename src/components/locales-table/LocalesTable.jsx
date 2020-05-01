import React from 'react';

import LocalesTableHeaders from './LocalesTableHeaders';
import LocalesTableRow from './LocalesTableRow';

class LocalesTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this._initialized = false;
  }

  _onHeadersClickHandler(evt, key) {
    evt.preventDefault();
    const action = this.context.facade.getAction('ApplicationAction');
    action.toggleColumn(key);
  }

  render() {
    const { langs } = this.props;
    const { values } = this.props;
    const { primarykeys } = this.props;
    return (
      <div
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}>
        <div
          className="table flex-rows"
          style={{
            borderTop: '1px solid #ECECEC',
            height: '100%',
            width: '100%',
          }}>
          <LocalesTableHeaders
            collapsed={this.props.collapsed}
            langs={langs}
            ontoggle={(...rest) => this._onHeadersClickHandler(...rest)}
          />
          <div
            className="scrollable"
            style={{
              height: '100%',
              overflowX: 'hidden',
              overflowY: 'scroll',
              position: 'relative',
              width: '100%',
            }}>
            <div
              className="table-body"
              style={{
                bottom: '0',
                left: '0',
                position: 'absolute',
                right: '0',
                top: '0',
              }}>
              {primarykeys.map((key, index) => (
                <LocalesTableRow
                  key={`row_${key}`}
                  collapsed={this.props.collapsed}
                  facade={this.context.facade}
                  langs={langs}
                  odd={Boolean(index % 2)}
                  primarykey={key}
                  values={values.map(obj => obj[key] || '')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocalesTable.contextTypes = {
  facade: React.PropTypes.object,
  theme: React.PropTypes.object,
};

LocalesTable.propTypes = {
  collapsed: React.PropTypes.array.isRequired,
  langs: React.PropTypes.array.isRequired,
  primarykeys: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
};

export default LocalesTable;
