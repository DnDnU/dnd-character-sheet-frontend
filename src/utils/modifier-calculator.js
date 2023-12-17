class ModifierCalculator {
    constructor (statValue) {
        this.initialValue = statValue;
        this.modifierValue = this.calculateModifier(statValue);
    }
    static calculateModifier (statValue) {
        if (statValue < 3) {
            return -4;
        } else if (statValue > 18) {
            return 4;
        } else {
            return modifierReference[statValue];
        }
    }
}

const modifierReference = {
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4,
}


module.exports = ModifierCalculator;