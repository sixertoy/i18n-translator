import React from 'react';
import { Helmet } from 'react-helmet';

import { homepage } from '../../../../package.json';

const HELMET_OPTIONS = [
  {
    src: 'https://platform.twitter.com/widgets.js',
    type: 'text/javascript',
  },
];

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
    <Helmet script={HELMET_OPTIONS} />
  </a>
);

export default TwitterShareButton;
