const { ERROR_MESSAGE, USER } = require('./constants');
module.exports = [
  {
    description: 'valid customer',
    input: {
      user: {
        type: USER.CUSTOMER.ID,
        joinDate: '2016-01-01'
      },
      bill: {
        total: 999,
        type: 'diet'
      }
    },
    output: 454.05,
    isError: false,

  },
  {
    description: 'invalid customer (not enough time)',
    input: {
      user: {
        type: USER.CUSTOMER.ID,
        joinDate: '2018-01-01'
      },
      bill: {
        total: 999,
        type: 'diet'
      }
    },
    output: 504,
    isError: false,

  },
  {
    description: 'valid employee with groceries',
    input: {
      user: {
        type: USER.EMPLOYEE.ID,
        joinDate: '2016-01-01'
      },
      bill: {
        total: 999,
        type: 'groceries'
      }
    },
    output: 504,
    isError: false,
  },
  {
    description: 'valid employee without groceries',
    input: {
      user: {
        type: USER.EMPLOYEE.ID,
        joinDate: '2016-01-01'
      },
      bill: {
        total: 600,
        type: 'coke'
      }
    },
    output: 420,
    isError: false,
  },
  {
    description: 'valid affiliate without groceries',
    input: {
      user: {
        type: USER.AFFILIATE.ID,
        joinDate: '2016-01-01'
      },
      bill: {
        total: 600,
        type: 'coke'
      }
    },
    output: 540,
    isError: false,
  },
  {
    description: 'Missing User Info',
    input: {
      user: {},
      bill: {}
    },
    output: {},
    isError: true,
    message: ERROR_MESSAGE.MISSING_USER_INFO,
  },
  {
    description: 'Missing Bill Info',
    input: {
      user: {
        type: USER.CUSTOMER.ID,
        joinDate: '2016-01-01'
      },
      bill: {
        total: 999
      }
    },
    output: 1,
    isError: true,
    message: ERROR_MESSAGE.MISSING_BILL_INFO
  },
];