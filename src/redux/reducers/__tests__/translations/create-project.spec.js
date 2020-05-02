import json from '../../../../../mocks/translation.json';
import { createProject } from '../../translations';

const translation = JSON.stringify(json);

const typeOfString = v => typeof v === 'string';

describe('src | redux | reducers | translations | createProject', () => {
  describe('createProject', () => {
    describe('structures/types', () => {
      it('retourne un objet avec les clés { keys, translations }', () => {
        const action = { json: translation, lang: '' };
        const result = createProject(action);
        expect(result).toMatchObject({
          keys: expect.any(Array),
          translations: expect.any(Array),
        });
        expect(result.keys).toSatisfyAll(typeOfString);
      });

      it('retourne un objet dont la clé { keys: [string] }', () => {
        const action = { json: translation, lang: '' };
        const result = createProject(action);
        expect(result.keys).toSatisfyAll(typeOfString);
      });

      it('retourne un objet dont { translations: [objects] }', () => {
        const action = { json: translation, lang: '' };
        const result = createProject(action);
        expect(result.translations).toMatchObject([
          {
            fav: expect.any(Boolean),
            id: expect.any(String),
            values: expect.any(Array),
          },
        ]);
      });
    });
  });
});
