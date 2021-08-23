exports.min = function min(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

exports.max = function max(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

exports.avg = function avg(array) {
    if (typeof array === "undefined" || array.length === 0) {
        return 0;
    }
    var len = array.length;
    var total = 0;
    for (var i = 0; i < len; i++) {
        total += array[i];
    }
    return total / len;
};
