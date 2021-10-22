
class StatsCalculator {

    constructor(numberSequence) {
        this.numberSequence = numberSequence;
    }

    getMinimum() {
        let minNumber;

        this.numberSequence.forEach(number => {
            if(!minNumber || number < minNumber) {
                minNumber = number;
            }
        });

        return minNumber;
    }

    getMaximum() {
        let maxNumber;

        this.numberSequence.forEach(number => {
            if(!maxNumber || number > maxNumber) {
                maxNumber = number;
            }
        });

        return maxNumber;
    }

    getNumberOfElements() {
        return this.numberSequence.length;
    }

    getAverage() {
        let averageNumber = 0;

        this.numberSequence.forEach(number => {
            averageNumber += number;
        });

        return averageNumber / this.getNumberOfElements();
    }

}

exports.StatsCalculator = StatsCalculator;