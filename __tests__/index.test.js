const { StatsCalculator } = require("../index.js");

describe("StatsCalculator", () => {
    let statsCalculator;

    beforeEach(() => {
        statsCalculator = new StatsCalculator();
    });

    it("should determine the minimum number", () => {
        expect(statsCalculator.getMinimum()).toBe(-2);
    });

    it("should determine the maximum number", () => {
        expect(statsCalculator.getMaximum()).toBe(92);
    });

});