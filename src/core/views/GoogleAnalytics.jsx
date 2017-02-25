import React from 'react';
import noop from 'lodash.noop';

/**
 * USAGE:
 * -------------------------------------------------
 * <GoogleAnalytics onload={() => {
 *    ga('create', '<your_google_analytics_application_id>', 'auto');
 *    ga('send', 'pageview');
 * }} />
 *
 *
 * @type {[type]}
 */
class GoogleAnalytics extends React.Component {

  componentDidMount () {

    if (this.props.restricted.indexOf(window.location.hostname) !== -1) {
      window.ga = noop;
      return null;
    }

    // dont reload analytics.js if ga already exists
    if (window.ga && this.props && this.props.onload) {
      this.props.onload();
      return null;
    }

    /* eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    /* eslint-enable */

    if (this.props && this.props.onload) {
      this.props.onload();
    }
    return null;
  }

  render () {
    return null;
  }

}

GoogleAnalytics.defaultProps = {
  restricted: ['localhost']
};

GoogleAnalytics.propTypes = {
  restricted: React.PropTypes.array,
  onload: React.PropTypes.func.isRequired
};

export default GoogleAnalytics;
