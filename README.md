# eagle-validator
[![Build Status](https://travis-ci.org/swaibat/eagle-validator.svg?branch=master)](https://travis-ci.org/swaibat/eagle-validator)
[![Coverage Status](https://coveralls.io/repos/github/swaibat/eagle-validator/badge.svg?branch=master)](https://coveralls.io/github/swaibat/eagle-validator?branch=master)

A modern javascript object validation node package available on npmjs.com

Basic usage
------------
a simple middleware for you
```
import Check from 'eagle-validator';

export default function validator(req, res, next) {
  const valid = [
    new Check({ firstName: req }).str().req().min(2).max(20).alpha(),
    new Check({ phoneNumber: req }).str().req().min(2).num(),
    new Check({ email: req }).str().req().email(),
  ];
  const invalid = valid.find((e) => e.error);
  if (invalid) return sendResult(res, 400, invalid.error);
  return next();
}
```
this will return simplified messages like:

####for required field

```firstName  field is required```
```firstName should be a string```
```firstName should be greaterthan 2```
```firstName should be lessthan 19```
```firstName should be alphabetic```

Basic abbrevations used
------------

| abbrevations    | meaning                   | example           |
| --------------  |:-------------------------:| -----------------:|
| str()           | string                    | 'hello'           |
| req()           | required                  | 'world'           |
| min()           | minimum characters        |  any              |
| max(3)          | miximum characters        |  any              |
| number()        | should be a number        |  1-9              |
| num()           | only numbers in a string  | `0-9`             |
| alpha()         | should ba alphabets only  | `A-Z,a-z`         |
| alphaNum()      | mixture of alpha & nums   | `A-Z,a-z,0-9`     |
| bool()          | should be a boolean       | `true`            |
| email()         | stictly email address     | `rswaib@gmail.com`|