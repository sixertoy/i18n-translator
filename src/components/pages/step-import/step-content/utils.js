export function createEditorDefaultValue(keys) {
  if (!keys || !keys.length) return null;
  const json = keys.sort().reduce((acc, key) => ({ ...acc, [key]: '' }), {});
  const value = JSON.stringify(json, null, 2);
  return value;
}

export default { createEditorDefaultValue };
