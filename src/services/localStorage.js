export const getItem = key => {
  let value = window.localStorage.getItem(key);
  if (value && (value.startsWith("{") || value.startsWith("["))) {
    value = JSON.parse(value);
  }
  return value;
};

export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
  return value;
};
