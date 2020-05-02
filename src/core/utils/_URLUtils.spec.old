/* eslint no-console: 0, max-nested-callbacks: 0 */
import { expect } from 'chai';
import URLUtils from './URLUtils';

let result = null;
let expected = null;

describe('URLUtils', () => {

  beforeEach(() => {});
  afterEach(() => {});

  describe('parse', () => {

    it('to equal expected', () => {
      expected = 'http://google.com/#/';
      result = URLUtils.parse('http://google.com');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/';
      result = URLUtils.parse('http://google.com/');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3';
      result = URLUtils.parse('http://google.com/?page=3');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3/';
      result = URLUtils.parse('http://google.com/?page=3/');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3/';
      result = URLUtils.parse('http://google.com/#/?page=3/');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3/';
      result = URLUtils.parse('http://google.com/#?page=3/');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3/';
      result = URLUtils.parse('http://google.com?page=3/#');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/#?page=3/';
      result = URLUtils.parse('http://google.com?page=3/##');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/?page=3/##';
      result = URLUtils.parse('http://google.com#?page=3/##');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/##?page=3';
      result = URLUtils.parse('http://google.com?page=3#/##');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/123/455?page=3#/##';
      result = URLUtils.parse('http://google.com#/123/455?page=3#/##');
      expect(result.href).to.equal(expected);
    });

    it('to equal expected', () => {
      expected = 'http://google.com/#/###/123/455?page=3#/##?page=3';
      result = URLUtils.parse('http://google.com?page=3#/###/123/455?page=3#/##');
      expect(result.href).to.equal(expected);
      expect(result.hash).to.equal('#/###/123/455?page=3#/##?page=3');
      expect(result.query).to.equal('');
    });

  });

});
