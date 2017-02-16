function* StepsIterator (stepsArr) {
  let index = -1;
  const len = (stepsArr.length - 1);
  // eslint-disable-next-line
  while (true) {
    index = (index >= len) ? 0 : (index + 1);
    yield stepsArr[index](index);
  }
}

export default StepsIterator;
