function validateTaxId(id) {
    if (!id || id.length !== 10) {
        return false;
    }
    var numbers = id.split('');
    var i = 0;
    var sum = 0;
    var temp = [];
    var iterativeExp = 2;
    while (i < 10) {
        numbers[i] = parseInt(numbers[i]);
        i++;
    }
    i = 8;
    while (i >= 0) {
        numbers[i] = (numbers[i] + 9 - i) % 10;
        temp[i] = (numbers[i] * iterativeExp) % 9;
        if ((numbers[i] != 0 && temp[i] == 0)) {
            temp[i] = 9;
        }
        sum += temp[i];
        iterativeExp *= 2;
        i--;
    }
    if (sum % 10 === 0) {
        sum = 0;
    } else {
        sum = (10 - (sum % 10));
    }
    return sum == numbers[9];
}
