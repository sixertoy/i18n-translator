export function checkIfIsDuplicated(value, current, items) {
  const hasItems = items.length > 0;
  if (!hasItems) return false;
  const isEqual = value.toLowerCase() === current.toLowerCase();
  if (isEqual) return false;
  const lowerCase = value.toLowerCase();
  const lowersCase = items.map(v => v.toLowerCase());
  const isDuplicated = lowersCase.includes(lowerCase);
  return isDuplicated;
}

export function checkIfIsEmpty(value) {
  const trimmed = value.trim();
  return trimmed === '';
}

export function checkIfIsEqual(update, value) {
  return update === value;
}
