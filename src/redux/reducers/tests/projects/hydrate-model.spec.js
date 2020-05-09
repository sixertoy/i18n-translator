import { project as model } from '../../../models';
import { hydrateModel } from '../../projects';

describe('src | redux | reducers | project', () => {
  it('teste la structure du modele', () => {
    const value = {};
    const expected = {
      ctime: expect.any(Number),
      id: expect.any(String),
      langs: expect.any(Array),
      mtime: expect.any(Number),
      name: expect.any(String),
    };
    const len = Object.keys(expected);
    const result = hydrateModel(model, value);
    expect(Object.keys(result)).toHaveLength(len);
    expect(result).toStrictEqual(expect.objectContaining(expected));
  });

  it('retourne si ctime et mtime sont égaux', () => {
    const value = {};
    const result = hydrateModel(model, value);
    expect(result.ctime).toStrictEqual(result.mtime);
  });
});
