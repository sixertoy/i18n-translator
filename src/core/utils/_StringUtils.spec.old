/* eslint no-console: 0, max-nested-callbacks: 0 */
import { expect } from 'chai';
import StringUtils from './StringUtils';

let result = null;
let expected = null;

describe('StringUtils', () => {

  beforeEach(() => {});
  afterEach(() => {});

  describe('removeTrailingSlash', () => {

    it('to equal http://google.com', () => {
      expected = 'http://google.com';
      result = StringUtils.removeTrailingSlash(expected);
      expect(result).to.equal(expected);
    });

    it('to equal http://google.com', () => {
      expected = 'http://google.com';
      result = StringUtils.removeTrailingSlash('http://google.com/');
      expect(result).to.equal(expected);
    });

  });

});
