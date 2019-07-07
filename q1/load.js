const { LOAD } = require('./testcases');
const load = (text) => {
  const array = [];
  text.split('\n').map(element => {
    if (!element) return;
    let object = {};
    element.split(';').map(keyValuePair => {
      if (!keyValuePair.includes('=')) return;
      const [key, value] = keyValuePair.split('=');
      object = {
        ...object,
        [key]: value
      }
    });
    array.push(object);
  });
  return array;
};

console.log(load('asdasd'));

module.exports = { load };