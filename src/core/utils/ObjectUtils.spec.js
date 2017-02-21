/* eslint no-console: 0, max-nested-callbacks: 0 */
import { expect } from 'chai';
//
import { clone } from './ObjectUtils';

describe('ObjectUtils', () => {

  let result;
  let expected;

  beforeEach(() => {});
  afterEach(() => {});

  describe('clone', () => {

    it('expect to be equal', () => {
      expected = {
        prop: true,
        prop2: null,
        prop3: {
          prop: true
        }
      };
      result = clone(expected);
      expect(result).to.not.equal(expected);
      expect(result.prop3).to.not.equal(expected.prop3);
    });

  });

});
