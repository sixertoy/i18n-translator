import hydrate from '../hydrate';
import { project as model } from '../models';

describe('src | redux | hydrate', () => {
  it("teste la structure du modele d'un projet", () => {
    const value = {};
    const expected = {
      ctime: expect.any(Number),
      id: expect.any(String),
      langs: expect.any(Array),
      mtime: expect.any(Number),
      name: expect.any(String),
    };
    const len = Object.keys(expected);
    const result = hydrate(model, value);
    expect(Object.keys(result)).toHaveLength(len);
    expect(result).toStrictEqual(expect.objectContaining(expected));
  });

  it('retourne si ctime et mtime sont égaux', () => {
    const value = {};
    const result = hydrate(model, value);
    expect(result.ctime).toStrictEqual(result.mtime);
  });
});
