const constants = {
  USER: {
    EMPLOYEE: {
      ID: 'employee',
      DISCOUNT_PERCENTAGE: 0.3
    },
    AFFILIATE: {
      ID: 'affiliate',
      DISCOUNT_PERCENTAGE: 0.1
    },
    CUSTOMER: {
      ID: 'customer',
      DISCOUNT_PERCENTAGE: 0.05
    }
  },
  CUSTOMER_TIME_TO_GET_DISCOUNT: {
    AMOUNT: 2,
    UNIT: 'years'
  },
  AMOUNT_DISCOUNT: {
    STEP: 100,
    AMOUNT: 5
  },
  EXCLUDE_PERCENTAGE_TYPE: 'groceries',
  ERROR_MESSAGE: {
    MISSING_USER_INFO: 'missing user info',
    MISSING_BILL_INFO: 'missing bill info'
  }
};
module.exports = constants;