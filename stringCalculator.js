function isValidCommaSeparatedOrNewLineNumbers(str, delimiter = /[\n,]/) {
    if (typeof str !== "string") return false;
    const escapedDelimiter = delimiter instanceof RegExp ? delimiter.source : delimiter;
    const regex = new RegExp(`^-?[0-9]+(${escapedDelimiter}-?[0-9]+)*$`);

    return regex.test(str.trim());
}

function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;

    let delimiter = /[\n,]/;

    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(`[${customDelimiterMatch[1]}\\n,]`);
        numbers = numbers.substring(customDelimiterMatch[0].length);
    }

    if (!isValidCommaSeparatedOrNewLineNumbers(numbers, delimiter))
        throw new Error("Input must be a comma seperated or new line string");

    const arrayNumbers = numbers.split(delimiter);

    let negativeNumbers = arrayNumbers.filter((arrayNumber) => (arrayNumber < 0));

    if (negativeNumbers.length > 0)
        throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(',')}`);
    
    return arrayNumbers.reduce((sum, acc) => (parseInt(sum) + parseInt(acc)), 0);
}

module.exports = add;
