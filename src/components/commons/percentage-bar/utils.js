export function getPercent(count, total, rounded) {
  const countIsValid = !Number.isNaN(count) && count >= 0;
  const totalIsValid = !Number.isNaN(total) && total > 0;
  if (!totalIsValid || !countIsValid) return 0;
  let percent = (count * 100) / total;
  percent = Math.round(percent * 10) / 10;
  if (!rounded) return percent;
  return Math.round(percent);
}

export default getPercent;
