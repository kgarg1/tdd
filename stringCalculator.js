function isValidCommaSeparatedOrNewLineNumbers(str) {
    return typeof str === "string" && /^[0-9]+([,\n][0-9]+)*$/.test(str.trim());
}

function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;

    if (!isValidCommaSeparatedOrNewLineNumbers(numbers))
        throw new Error("Input must be a comma seperated or new line string");

    const arrayNumbers = numbers.split(/[\n,]/);
    
    return arrayNumbers.reduce((sum, acc) => (parseInt(sum) + parseInt(acc)), 0);
}

module.exports = add;
