export function languageAlphaSort(a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
}

export function languageDisabledSort(a, b) {
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
  return 0;
}

export function flagOptionsWithDisabled(langs, defaults) {
  const grouped = Object.entries(defaults)
    .sort(languageAlphaSort)
    .map(arr => {
      const key = arr[0];
      const disabled = langs.includes(key);
      return [...arr, disabled];
    })
    .sort(languageDisabledSort);
  return grouped;
}

export function createEditorDefaultValue(keys) {
  if (!keys || !keys.length) return null;
  const json = keys.sort().reduce((acc, key) => ({ ...acc, [key]: '' }), {});
  const value = JSON.stringify(json, null, 2);
  return value;
}
