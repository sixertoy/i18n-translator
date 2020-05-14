import hydrate from '../hydrate';
import { project as model } from '../models';

describe('src | redux | hydrate', () => {
  it("teste la structure du modele d'un projet", () => {
    const value = {};
    const expected = {
      ctime: expect.any(Number),
      demo: expect.any(Boolean),
      id: expect.any(String),
      langs: expect.any(Array),
      mtime: expect.any(Number),
      name: expect.any(String),
    };
    const result = hydrate(model, value);
    const rkeys = Object.keys(result).sort();
    const ekeys = Object.keys(expected).sort();
    expect(rkeys).toStrictEqual(ekeys);
  });

  it('teste que les valeurs ne soient pas overridées si elles existent', () => {
    const id = 'demo';
    const name = 'Demo';
    const value = { id, name };
    const expected = {
      ctime: expect.any(Number),
      demo: false,
      id,
      langs: expect.any(Array),
      mtime: expect.any(Number),
      name,
    };
    const result = hydrate(model, value);
    expect(result).toStrictEqual(expected);
  });

  it('retourne si ctime et mtime sont égaux', () => {
    const value = {};
    const result = hydrate(model, value);
    expect(result.ctime).toStrictEqual(result.mtime);
  });
});
