const selectSomething = useMemo(makeSelector, []);
const something = useSelector(_ => selectSomething(_, id));
