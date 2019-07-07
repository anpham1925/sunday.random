const { load } = require('./load');
const { LOAD } = require('./testcases');

describe.each(LOAD)(
  'load testing ...',
  (eachCase) => {
    test(`expects ${eachCase.output}`, () => {
      expect(load(eachCase.input)).toStrictEqual(eachCase.output);
    });
  },
);