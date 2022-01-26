export const rename = (name) => {
  const split = name.split("\\");
  return split[split.length - 1];
};
