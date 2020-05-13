import { checkIfIsDuplicated } from '../utils';

describe('src | components | views | board | table | utils', () => {
  describe('checkIfIsDuplicated', () => {
    it(`retourne false \
si aucune valeur dans le tableau`, () => {
      const update = 'toto';
      const content = 'not-used';
      const items = [];
      const result = checkIfIsDuplicated(update, content, items);
      expect(result).not.toBeTruthy();
    });

    it(`retourne false \
si la valeur est égale à la valeur actuelle`, () => {
      const update = 'toto';
      const content = 'toto';
      const items = ['not-used'];
      const result = checkIfIsDuplicated(update, content, items);
      expect(result).not.toBeTruthy();
    });

    it(`retourne true \
si la valeur existe déjà`, () => {
      const update = 'titi';
      const content = 'not-used';
      const items = ['titi'];
      const result = checkIfIsDuplicated(update, content, items);
      expect(result).toBeTruthy();
    });

    it(`retourne true \
si la valeur existe déjà mais de case différente`, () => {
      const update = 'TITI';
      const content = 'not-used';
      const items = ['titi'];
      const result = checkIfIsDuplicated(update, content, items);
      expect(result).toBeTruthy();
    });
  });
});
