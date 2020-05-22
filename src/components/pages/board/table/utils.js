export function checkIfIsDuplicated(value, current, items) {
  if (!items.length) return false;
  if (value === current) return false;
  const lowerCase = value.toLowerCase();
  const lowersCase = items.map(v => v.toLowerCase());
  return lowersCase.includes(lowerCase);
}

export function checkIfIsEmpty(value) {
  const trimmed = value.trim();
  return trimmed === '';
}

export function checkIfIsEqual(update, value) {
  return update === value;
}
