function isValidCommaSeparatedNumbers(str) {
    return /^[0-9]+(,[0-9]+)*$/.test(str);
}

function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;

    if (!isValidCommaSeparatedNumbers(numbers))
        throw new Error("Input must be a comma seperated string");

    const arrayNumbers = numbers.split(',');
    
    return arrayNumbers.reduce((sum, acc) => (parseInt(sum) + parseInt(acc)), 0);
}

module.exports = add;
