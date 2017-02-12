import React from 'react';
// project
import ExportButton from './buttons/ExportButton';

class ApplicationFooter extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {};
  }

  /* --------------------------------------------------------

   Privates

  -------------------------------------------------------- */

  _showTranslationsContent (evt, savediff) {
    evt.preventDefault();
    const ApplicationAction = this.props.facade.getAction('ApplicationAction');
    ApplicationAction.togglePopin();
    ApplicationAction.saveLocales(savediff);
  }

  /* --------------------------------------------------------

   Renders Sub Components

  -------------------------------------------------------- */

  _renderSaveButtons () {
    return (
      <span>
        <ExportButton label={'Export All Languages (admin)'}
          clickHandler={e => this._showTranslationsContent(e, false)}
          styles={{
            marginRight: '12px'
          }} />
        <ExportButton type={'submit'}
          label={'Export Snippet'}
          clickHandler={e => this._showTranslationsContent(e, true)}
          styles={{
            marginRight: '12px'
          }} />
      </span>
    );
  }

  render () {
    return (
      <div className="application-footer flex-columns flex-align-end shadow-top"
        style={{
          width: '100%',
          height: '50px',
          minHeight: '50px',
          background: '#1D1F21'
        }}>
        {this._renderSaveButtons()}
      </div>
    );
  }

}

ApplicationFooter.propTypes = {
  facade: React.PropTypes.object.isRequired
};

export default ApplicationFooter;
