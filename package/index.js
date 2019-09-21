/* eslint-disable no-useless-escape */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-prototype-builtins */
class Validate {
  constructor(data) {
    this.key = Object.entries(data)[0][0];
    this.val = Object.entries(data)[0][1].body[this.key];
    this.error = '';
    this.status = 200;
    this.data = Object.entries(data)[0][1].body;
  }

  str() {
    if (typeof this.val !== 'string') {
      this.status = 400;
      this.error = `${this.key} should be a string`;
      this.val = JSON.stringify(this.val);
      return this;
    }
    return this;
  }

  req() {
    if (!this.data.hasOwnProperty(this.key) || !this.val) {
      this.status = 400;
      this.error = `${this.key} is required`;
      return this;
    }
    return this;
  }

  min(len) {
    if (!this.val) {
      this.status = 400;
      this.error = `${this.key} is required`;
      return this;
    }
    if (this.val.length < len) {
      this.status = 400;
      this.error = `${this.key} should be greater than ${len - 1}`;
      return this;
    }
    return this;
  }

  max(len) {
    if (!this.val) {
      this.status = 400;
      this.error = `${this.key} is required`;
      return this;
    }
    if (this.val.length > len) {
      this.status = 400;
      this.error = `${this.key} should be less than ${len}`;
      return this;
    }
    return this;
  }

  alpha() {
    if (!this.val.match(/^[a-zA-Z]+$/)) {
      this.status = 400;
      this.error = `${this.key} should be alphabetic`;
      return this;
    }
    return this;
  }

  alphaNum() {
    if (!this.val.match(/^[a-zA-Z0-9]+$/)) {
      this.status = 400;
      this.error = `${this.key} should be alphanumeric`;
      return this;
    }
    return this;
  }

  num() {
    if (!this.val.match(/^[0-9]+$/)) {
      this.status = 400;
      this.error = `${this.key} should be numeric`;
      return this;
    }
    return this;
  }

  email() {
    if (!this.val.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.status = 400;
      this.error = `Invalid ${this.key} address`;
      return this;
    }
    return this;
  }

  number() {
    if (typeof this.val !== 'number') {
      this.status = 400;
      this.error = `${this.key} should be a number`;
      return this;
    }
    return this;
  }

  bool() {
    if (typeof JSON.parse(this.val) !== 'boolean') {
      this.status = 400;
      this.error = `${this.key} should be a either true or false`;
      return this;
    }
    return this;
  }
}


export default Validate;
