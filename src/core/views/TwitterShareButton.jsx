import React from 'react';
import Helmet from 'react-helmet';

/**
 * @see https://buttons.github.io/
 *
 * <!-- Place this tag in your head or just before your close body tag. -->
 * <script async defer src="https://buttons.github.io/buttons.js"></script>
 */
const TwitterShareButton = props => (
  <a class="twitter-share-button"
    href="https://twitter.com/share"
    data-size="large"
    data-related={props.username}
    data-hashtags="json,translation,javascript,react">
    {props.label}
    <Helmet script={[{
      type: 'text/javascript',
      src: 'https://buttons.github.io/buttons.js'
    }]} />
  </a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
);
<a href="https://twitter.com/share" class="twitter-share-button" data-url="https://sixertoy.github.io/i18n-translator/" data-size="large" data-related="sixertoy" data-hashtags="json,translation,javascript,react">Tweet</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

TwitterShareButton.defaultProps = {
  label: 'Share on Twitter'
};

TwitterShareButton.propTypes = {
  label: React.PropTypes.string,
  username: React.PropTypes.string.isRequired,
  projectname: React.PropTypes.string.isRequired
};

export default TwitterShareButton;
