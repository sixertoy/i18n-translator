function deleteLanguage(state, action) {
  const { lang, project } = action;
  const nextState = state.reduce((acc, obj) => {
    if (obj.id !== project) return [...acc, obj];
    const langs = obj.langs.filter(l => l !== lang);
    const mtime = Date.now();
    return [...acc, { ...obj, langs, mtime }];
  }, []);
  return nextState;
}

export default deleteLanguage;
