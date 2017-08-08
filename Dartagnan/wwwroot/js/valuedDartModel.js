define([], function () {
    var multipliers = {
        "s": 1,
        "d": 2,
        "t": 3
    }

    function ValuedDart(key) {
        var self = this,
            multiplier = multipliers[key[0]],
            value = multiplier * +key.substring(1)

        this.getKey = function () { return key; }
        this.getValue = function () { return value; }
        this.getMultiplier = function () { return multiplier; }
        this.displayText = function () { return }
    }

    return ValuedDart;
});