import React from 'react';
import Helmet from 'react-helmet';

/**
 * @see https://buttons.github.io/
 *
 * <!-- Place this tag in your head or just before your close body tag. -->
 * <script async defer src="https://buttons.github.io/buttons.js"></script>
 */
const TwitterShareButton = props => (
  <a className="twitter-wjs twitter-share-button"
    href="https://twitter.com/share"
    id="twitter-wjs"
    data-size="large"
    data-url={props.projecturl}
    data-related={props.username}
    data-hashtags="json,translation,javascript,react">
    {props.label}
    <Helmet script={[{
      type: 'text/javascript',
      src: 'https://platform.twitter.com/widgets.js'
    }]} />
  </a>
);

TwitterShareButton.defaultProps = {
  label: 'Share on Twitter'
};

TwitterShareButton.propTypes = {
  label: React.PropTypes.string,
  username: React.PropTypes.string.isRequired,
  projecturl: React.PropTypes.string.isRequired
};

export default TwitterShareButton;
