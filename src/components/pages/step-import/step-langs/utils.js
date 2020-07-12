import { DEFAULT_LANGUAGES } from '../../../../constants';

function languageAlphaSort(a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
}

function languageDisabledSort(a, b) {
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
  return 0;
}

export function getDisableLanguages(langs) {
  const grouped = Object.entries(DEFAULT_LANGUAGES)
    .sort(languageAlphaSort)
    .map(arr => {
      const key = arr[0];
      const disabled = langs.includes(key);
      return [...arr, disabled];
    })
    .sort(languageDisabledSort);
  return grouped;
}

export default { getDisableLanguages };
