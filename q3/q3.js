const CONSTANTS = require('./constants');
const moment = require('moment');

class Bill {
  constructor(userInfo, billInfo) {

    if (!userInfo || !userInfo.type || !userInfo.joinDate) {
      throw new Error(CONSTANTS.ERROR_MESSAGE.MISSING_USER_INFO);
    }

    if (!billInfo || !billInfo.type || !billInfo.total) {
      throw new Error(CONSTANTS.ERROR_MESSAGE.MISSING_BILL_INFO);
    }

    this.userInfo = userInfo;
    this.billInfo = billInfo;
    this.discount = 0;
  }

  _getPercentageDiscount() {
    let rate = 0;
    if (this.billInfo.type === CONSTANTS.EXCLUDE_PERCENTAGE_TYPE) return rate;
    switch (this.userInfo.type) {
      case (CONSTANTS.USER.EMPLOYEE.ID):
        rate = CONSTANTS.USER.EMPLOYEE.DISCOUNT_PERCENTAGE;
        break;
      case (CONSTANTS.USER.AFFILIATE.ID):
        rate = CONSTANTS.USER.AFFILIATE.DISCOUNT_PERCENTAGE;
        break;
      case (CONSTANTS.USER.CUSTOMER.ID):
        if (this._checkCustomerLength(this.userInfo.joinDate)) {
          rate = CONSTANTS.USER.CUSTOMER.DISCOUNT_PERCENTAGE;
        }
        break;
    }

    return rate * this.billInfo.total;
  }

  _checkCustomerLength(joinDate) {
    const now = moment();
    const timeToCompare = moment(joinDate).add(
      CONSTANTS.CUSTOMER_TIME_TO_GET_DISCOUNT.AMOUNT,
      CONSTANTS.CUSTOMER_TIME_TO_GET_DISCOUNT.UNIT
    );
    return !now.isBefore(timeToCompare);
  }

  _getAmountDiscount() {
    return Math.floor(this.billInfo.total % CONSTANTS.AMOUNT_DISCOUNT.STEP) * CONSTANTS.AMOUNT_DISCOUNT.AMOUNT;
  }

  getNetPayableAmount() {
    const percentageDiscount = this._getPercentageDiscount();
    const amountDiscount = this._getAmountDiscount();
    this.discount = percentageDiscount + amountDiscount;
    return this.billInfo.total - this.discount;
  }
}

module.exports = Bill;