export const oneOf = (value, arr) => {
  if (arr.indexOf(value) > -1) {
    return true;
  } else {
    throw new Error('invalid value');
  }
};
