const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function () {

  it("Super Sale drops 2", function () {
    const coTest = new CarInsurance([new Product("Super Sale", 10, 10)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(8);
  });

  it("Mega Coverage never changes", function () {
    const coTest = new CarInsurance([new Product("Mega Coverage", 0, 80)]);
    const products = coTest.updatePrice();
    
  expect(products[0].name).equal('Mega Coverage');
  expect(products[0].sellIn).equal(0);
  expect(products[0].price).equal(80);
  });


});
