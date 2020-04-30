import React from 'react';
import { Helmet } from 'react-helmet';

import { homepage } from '../../../../package.json';

/**
 * @see https://buttons.github.io/
 *
 * <!-- Place this tag in your head or just before your close body tag. -->
 * <script async defer src="https://buttons.github.io/buttons.js"></script>
 */
const TwitterShareButton = () => (
  <a
    className="twitter-wjs twitter-share-button"
    data-hashtags="json,translation,javascript,react"
    data-related="sixertoy"
    data-size="large"
    data-url={homepage}
    href="https://twitter.com/share"
    id="twitter-wjs">
    Share on Twitter
    <Helmet
      script={[
        {
          src: 'https://platform.twitter.com/widgets.js',
          type: 'text/javascript',
        },
      ]}
    />
  </a>
);

export default TwitterShareButton;
