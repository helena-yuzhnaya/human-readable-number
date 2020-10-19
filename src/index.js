module.exports = function toReadable (number) {
    let arraySimple = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrayTens = [ '','ten','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let arrayTeen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let string = '';
    if (number == 0) {
        return 'zero';
    }
if (number / 100 >= 1 ) {
    let firstNumber = Math.trunc(number/100);
    string = string + arraySimple[firstNumber] + ' hundred';
    let otherNumber = number - firstNumber * 100;
    let newArray = otherNumber.toString().split('');
    if (newArray.length == 1 && newArray[0] == 0) {
        return string;
    }

    if (newArray.length == 1 && newArray[0] != 0) {
        newArray.unshift('0');
    }
    if (Number(newArray[0]) == 0) { 
        return string = string + ' ' + arraySimple[Number(newArray[1])];
    } 
    if (Number(newArray[0]) == 1) {
        return string = string +  ' ' + arrayTeen[Number(newArray[1])];
    } else {
        if (Number(newArray[1]) == 0) {
            string = string + ' ' + arrayTens[Number(newArray[0])];
        } else {
            return string = string + ' ' + arrayTens[Number(newArray[0])] + ' ' + arraySimple[Number(newArray[1])];
        }
    }
    return string;
}
if (number / 100 < 1 ) {
    let newArray = number.toString().split('');
    if (newArray.length == 1 && newArray[0] == 0) {
        return string;
    }

    if (newArray.length == 1 && newArray[0] != 0) {
        newArray.unshift('0');
    }
        if (Number(newArray[0]) == 0) { 
            return string = string + arraySimple[Number(newArray[1])];
        } 
        if (Number(newArray[0]) == 1) {
            return string = string + arrayTeen[Number(newArray[1])];
        } else {
            if (Number(newArray[1]) == 0) {
                string = string + arrayTens[Number(newArray[0])];
            } else {
                return string = string + arrayTens[Number(newArray[0])] + ' ' + arraySimple[Number(newArray[1])];
            }
        }
        return string;
}
}

