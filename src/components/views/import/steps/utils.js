export const languageAlphaSort = (a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
  return 0;
};

export const languageDisabledSort = (a, b) => {
  if (a[2] > b[2]) return 1;
  if (a[2] < b[2]) return -1;
  return 0;
};

export const flagOptionsWithDisabled = (langs, defaults) => {
  const grouped = Object.entries(defaults)
    .sort(languageAlphaSort)
    .map(arr => {
      const key = arr[0];
      const disabled = langs.includes(key);
      return [...arr, disabled];
    })
    .sort(languageDisabledSort);
  return grouped;
};
