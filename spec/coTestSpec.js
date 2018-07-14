const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function () {

  it("Prices never negatives", function () {
    const coTest = new CarInsurance([new Product("Medium Coverage", 1, 0)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Medium Coverage');
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(0);
  });

  it("If sellIn equals 0, then price drops 2", function () {
    const coTest = new CarInsurance([new Product("Low Coverage", -1, 20)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Low Coverage');
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(18);
  });

  it("Prices never over 50", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 2, 50)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Full Coverage');
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(50);
  });

  it("Full Coverage always increases", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", -1, 20)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Full Coverage');
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(21);
  });

  it("Mega Coverage price never changes", function () {
    const coTest = new CarInsurance([new Product("Mega Coverage", 0, 80)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Mega Coverage');
    expect(products[0].sellIn).equal(0);
    expect(products[0].price).equal(80);
  });

  it("Special Full Coverage drops 1 if sellIn >= 11", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 11, 48)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(10);
    expect(products[0].price).equal(49);
  });

  it("Special Full Coverage increases 2 if sellIn < 11", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 10, 20)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(22);
  });

  it("Special Full Coverage increases 3 if sellIn < 6", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 5, 20)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(23);
  });

  it("Special Full Coverage price is almost 50, does not increase over 50", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 10, 49)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(50);
  });
  it("Special Full Coverage price is almost 50, does not increase over 50", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 5, 49)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(50);
  });

  it("Special Full Coverage price drops to 0 if sellIn < 0", function () {
    const coTest = new CarInsurance([new Product("Special Full Coverage", 0, 20)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Special Full Coverage');
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(0);
  });

  it("Super Sale drops 2", function () {
    const coTest = new CarInsurance([new Product("Super Sale", 10, 10)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(8);
  });

  it("Prices never negatives, even with sellIn negative", function () {
    const coTest = new CarInsurance([new Product("Medium Coverage", -1, 0)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellIn).equal(-2);
    expect(products[0].price).equal(0);
  });

  it("Mega Coverage never changes, even with sellIn negative", function () {
    const coTest = new CarInsurance([new Product("Mega Coverage", -1, 80)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(80);
  });

  it("Prices never over 50, even with sellIn negative", function () {
    const coTest = new CarInsurance([new Product("Full Coverage", 0, 50)]);
    const products = coTest.updatePrice();

    expect(products[0].name).equal('Full Coverage');
    expect(products[0].sellIn).equal(-1);
    expect(products[0].price).equal(50);
  });

});
