const expect = require("chai").expect;
const assert = require("chai").assert;
const calculator = require("../app/calculator");

describe("Test Calculator", () => {
    const add = calculator.add(5, 2);
    it("add(5, 2) expected result 7", () => {
        let expected = 5 + 2;
        assert.equal(add, expected);
    });

    it("add(5, 2) expected result 8", () => {
        let expected = 5 + 3;
        assert.equal(add, expected);
    });

    const sub = calculator.sub(5, 2);
    it("sub(5, 2) expected result 3", () => {
        let expected = 5 - 2;
        assert.equal(sub, expected);
    });

    it("sub(5, 2) expected result 3", () => {
        let expected = 5;
        assert.equal(sub, expected);
    });

    const mul = calculator.mul(5, 2);
    it("mul(5, 2) expected result 10", () => {
        let expected = 5 * 2;
        assert.equal(mul, expected);
    });

    it("mul(5, 2) expected result 10", () => {
        let expected = 12;
        assert.equal(mul, expected);
    });

    const div = calculator.div(10, 2);
    it("div(10, 2) expected result 5", () => {
        let expected = 10 / 2;
        assert.equal(div, expected);
    });

    it("div(10, 2) expected result 5", () => {
        let expected = 2;
        assert.equal(div, expected);
    });
});
