define([], function () {
    var multipliers = {
        "s": 1,
        "d": 2,
        "t": 3
    }

    function ValuedDart(key) {
        var self = this,
            multiplier = multipliers[key[0]],
            valueWithoutMultiplier = +key.substring(1),
            value = multiplier * valueWithoutMultiplier;

        this.getKey = function () { return key; };
        this.getValue = function () { return value; };
        this.getMultiplier = function () { return multiplier; };
        this.getValueWithoutMultiplier = function () { return valueWithoutMultiplier; };
    }

    return ValuedDart;
});