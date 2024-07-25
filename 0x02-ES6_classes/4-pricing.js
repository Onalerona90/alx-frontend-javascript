import Currency from './3-currency';

export default class Pricing {
  /* eslint-disable */
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`; 
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
