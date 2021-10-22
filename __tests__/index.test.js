const {StatsCalculator} = require("../index.js");

describe.each([
    {
        sequence: [6, 9, 15, -2, 92, 11],
        min: -2,
        max: 92,
        numberOfElements: 6,
        average: 21.833333333333332
    },
    {
        sequence: [2, 1, 65],
        min: 1,
        max: 65,
        numberOfElements: 3,
        average: 22.666666666666668
    },
    {
        sequence: [8, 3, 87, -232, 54],
        min: -232,
        max: 87,
        numberOfElements: 5,
        average: -16
    },
])("StatsCalculator for $sequence", (dataToTest) => {
    let statsCalculator;

    beforeEach(() => {
        statsCalculator = new StatsCalculator(dataToTest.sequence);
    });

    it("should determine the minimum number", () => {
        expect(statsCalculator.getMinimum()).toBe(dataToTest.min);
    });

    it("should determine the maximum number", () => {
        expect(statsCalculator.getMaximum()).toBe(dataToTest.max);
    });

    it('should determine the number of elements in the sequence', () => {
        expect(statsCalculator.getNumberOfElements()).toBe(dataToTest.numberOfElements);
    });

    it('should determine the average number of the whole sequence', () => {
        expect(statsCalculator.getAverage()).toBe(dataToTest.average);
    });

});