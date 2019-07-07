const { store } = require('./store');
const { STORE } = require('./testcases');

describe.each(STORE)(
  'store testing ...',
  (eachCase) => {
    test(`expects ${eachCase.output}`, () => {
      expect(store(eachCase.input)).toBe(eachCase.output);
    });
  },
);