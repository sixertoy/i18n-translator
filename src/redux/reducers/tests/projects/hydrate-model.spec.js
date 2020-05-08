import { hydrateModel, MODEL } from '../../projects';

describe('src | redux | reducers | project', () => {
  it('teste la structure du modele', () => {
    const value = {};
    const expected = {
      ctime: expect.any(Number),
      id: expect.any(String),
      mtime: expect.any(Number),
      name: expect.any(String),
    };
    const result = hydrateModel(MODEL, value);
    expect(Object.keys(result)).toHaveLength(4);
    expect(result).toStrictEqual(expect.objectContaining(expected));
  });

  it('retourne si ctime et mtime sont égaux', () => {
    const value = {};
    const result = hydrateModel(MODEL, value);
    expect(result.ctime).toStrictEqual(result.mtime);
  });
});
