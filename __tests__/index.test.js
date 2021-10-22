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

    it('should determine the number of elements in the sequence', () => {
        expect(statsCalculator.getNumberOfElements()).toBe(6);
    });

    it('should determine the average number of the whole sequence', () => {
        expect(statsCalculator.getAverage()).toBe(21.833333);
    });

});