export const px = size => `${size}px`;

export const important = (value, unit = false) =>
  `${value}${unit || ''} !important`;

export const width = (value, unit = false) => {
  const size = `${value}${unit || ''}`;
  return {
    maxWidth: size,
    minWidth: size,
    width: size,
  };
};

export const height = (value, unit = false) => {
  const size = `${value}${unit || ''}`;
  return {
    height: size,
    maxHeight: size,
    minHeight: size,
  };
};
