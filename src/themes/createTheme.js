import defaultTheme from "./default";

const getSize = (theme, size) => {
  if (size === 0) {
    return theme.sizing.unit;
  }

  const operator = size > 0 ? "*" : "/";
  const operation = ` ${operator} ${theme.sizing.ratio}`;

  return `calc(${theme.sizing.unit}${operation.repeat(Math.abs(size))})`;
};

export default (theme = {}) => {
  const combinedTheme = {
    ...defaultTheme,
    ...theme,
  };

  return {
    ...combinedTheme,
    sizing: {
      ...combinedTheme.sizing,
      getSize: (size) => getSize(combinedTheme, size),
    },
  };
};
