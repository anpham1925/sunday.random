const Bill = require('./q3');
const cases = require('./testcases');

describe.each(cases)(
  'bill testing ...',
  (eachCase) => {
    if (!eachCase.isError) {
      test(`case ${eachCase.description} -- expects ${eachCase.output}`, () => {
        expect(new Bill(eachCase.input.user, eachCase.input.bill).getNetPayableAmount()).toBeCloseTo(eachCase.output);
      });
    } else {
      test(`case ${eachCase.description} -- expects ${eachCase.message}`, () => {
        expect(() => { new Bill(eachCase.input.user, eachCase.input.bill).getNetPayableAmount() }).toThrow(eachCase.message);
      });
    }
  },
);