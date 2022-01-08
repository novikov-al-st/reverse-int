module.exports = function reverse(n) {

    let numberString = String(n);
    let numberReverseString = '';

    if (numberString[0] === '-') {
        numberString = numberString.substring(0);
    }

    for (let i = numberString.length - 1; i >= 0; i--) {
        numberReverseString += numberString[i];
    }

    return parseInt(numberReverseString);
}