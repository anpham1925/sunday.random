const store = (array) => {
  let string = '';
  array.map((element, index) => {
    const keys = Object.keys(element);
    const arrayLastIndex = array.length - 1;
    let innerString = '';
    keys.map((k, keyIndex) => {
      const keyLastIndex = keys.length - 1;
      if (keyIndex === keyLastIndex) {
        innerString += `${k}=${element[k]}`;
      } else {
        innerString += `${k}=${element[k]};`;
      }
    });
    if (index === arrayLastIndex) {
      string += `${innerString}`;
    } else {
      string += `${innerString}\n`;
    }
  });
  return string;
};

module.exports = { store };