import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import Check from '../package/index';

const should = chai.should();

chai.use(chaiHttp);


describe('Test validations', () => {
  it('should check required fields', () => {
    const req = { body: { should } };
    new Check({ name: req }).req().error.should.eql('name is required');
  });
  it('should check string type', () => {
    const req = { body: { name: 1 } };
    new Check({ name: req }).str().error.should.eql('name should be a string');
  });
  it('should check boolean type', () => {
    const req = { body: { name: 1 } };
    new Check({ name: req }).bool().error.should.eql('name should be a either true or false');
  });
  it('should check number type', () => {
    const req = { body: { phone: 'john' } };
    new Check({ phone: req }).number().error.should.eql('phone should be a number');
  });
});

describe('Test validations', () => {
  it('should check required fields', () => {
    const req = { body: { name: 'john' } };
    new Check({ name: req }).req().should.a('object');
    new Check({ name: req }).req().status.should.eql(200);
  });
  it('should check string type', () => {
    const req = { body: { name: 'hello' } };
    new Check({ name: req }).str().should.a('object');
    new Check({ name: req }).str().status.should.eql(200);
  });
  it('should check boolean type', () => {
    const req = { body: { name: true } };
    new Check({ name: req }).bool().should.a('object');
    new Check({ name: req }).bool().status.should.eql(200);
  });
  it('should check number type', () => {
    const req = { body: { phone: 34 } };
    new Check({ phone: req }).number().should.a('object');
    new Check({ phone: req }).number().status.should.eql(200);
  });
});

describe('Sring type test', () => {
  it('should check numeric string', () => {
    const req = { body: { name: '1234' } };
    new Check({ name: req }).num().should.a('object');
    new Check({ name: req }).num().status.should.eql(200);
  });

  it('should check numeric string', () => {
    const req = { body: { name: 'hello' } };
    new Check({ name: req }).alpha().should.a('object');
    new Check({ name: req }).alpha().status.should.eql(200);
  });
  it('should check alpanumeric string', () => {
    const req = { body: { name: '777joe' } };
    new Check({ name: req }).alphaNum().status.should.eql(200);
  });
  it('should check alpanumeric string', () => {
    const req = { body: { name: 'johng' } };
    new Check({ name: req }).min(5).status.should.eql(200);
  });
  it('should check minimun characters', () => {
    const req = { body: { name: 'jo' } };
    new Check({ name: req }).max(3).status.should.eql(200);
  });
  it('should check minimun characters', () => {
    const req = { body: { name: 'jo' } };
    new Check({ name: req }).alpha().should.a('object');
    new Check({ name: req }).max(3).status.should.eql(200);
  });
  it('should check miximun characters', () => {
    const req = { body: { name: undefined } };
    new Check({ name: req }).max(3).should.a('object');
    new Check({ name: req }).max(3).error.should.eql('name is required');
  });
  it('should check minimun characters', () => {
    const req = { body: { name: undefined } };
    new Check({ name: req }).min(3).should.a('object');
    new Check({ name: req }).min(3).error.should.eql('name is required');
  });
  it('should check check maximum characters', () => {
    const req = { body: { email: 'john@gmail.com' } };
    new Check({ email: req }).email().status.should.eql(200);
  });
  it('should check boolean type', () => {
    const req = { body: { name: true } };
    new Check({ name: req }).bool().should.a('object');
    new Check({ name: req }).bool().status.should.eql(200);
  });
});

describe('Sring type test', () => {
  it('should check numeric string', () => {
    const req = { body: { name: 'hello' } };
    new Check({ name: req }).num().error.should.eql('name should be numeric');
  });
  it('should check alpabetic string', () => {
    const req = { body: { name: '777' } };
    new Check({ name: req }).alpha().error.should.eql('name should be alphabetic');
  });
  it('should check alpanumeric string', () => {
    const req = { body: { name: '777@' } };
    new Check({ name: req }).alphaNum().error.should.eql('name should be alphanumeric');
  });
  it('should check alpanumeric string', () => {
    const req = { body: { name: 'john' } };
    new Check({ name: req }).min(5).error.should.eql('name should be greater than 4');
  });
  it('should check minimun characters', () => {
    const req = { body: { name: 'john' } };
    new Check({ name: req }).max(3).error.should.eql('name should be less than 3');
  });

  it('should check check email address', () => {
    const req = { body: { email: 'john@' } };
    new Check({ email: req }).email().error.should.eql('Invalid email address');
  });
});
