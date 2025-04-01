function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special regex characters
}

function isValidCommaSeparatedOrNewLineNumbers(str, delimiter = /[\n,]/) {
    if (typeof str !== "string") return false;

    // Escape the delimiter if it's not already a regex
    const escapedDelimiter = delimiter instanceof RegExp ? delimiter.source : escapeRegExp(delimiter);

    // allowing for negative numbers and ensuring proper formatting.
    const regex = new RegExp(`^-?\\d+(?:(${escapedDelimiter})-?\\d+)*$`);

    // Ensure that the string confirms to the regex pattern, allowing mixed delimiters
    return regex.test(str.trim());
}

function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;

    let delimiter = /[\n,]/;

    const customDelimiterMatch = numbers.match(/^\/\/(\[.*\]|\S+)\n/);
    

    if (customDelimiterMatch) {
        let customDelimiterPart = customDelimiterMatch[1];

        if (customDelimiterPart.startsWith("[")) {
            // Multiple or multi-character delimiters (e.g., //[***][%%]\n1***2%%3)
            const delimiters = customDelimiterPart
                .slice(1, -1)
                .split("][")
                .map(escapeRegExp)
                .join("|");

            delimiter = new RegExp(delimiters);
        } else {
            // Single-character delimiter (e.g., //;\n1;2)
            delimiter = new RegExp(escapeRegExp(customDelimiterPart));
        }

        numbers = numbers.substring(customDelimiterMatch[0].length); // Remove delimiter definition
    }

    if (!isValidCommaSeparatedOrNewLineNumbers(numbers, delimiter))
        throw new Error("Input must be a comma seperated or new line string");

    const arrayNumbers = numbers.split(delimiter).filter(n => n !== '');

    let negativeNumbers = arrayNumbers.filter((arrayNumber) => (arrayNumber < 0));

    if (negativeNumbers.length > 0)
        throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(',')}`);
    
    return arrayNumbers.reduce((sum, acc) => (parseInt(sum) + (acc > 1000 ? 0 : parseInt(acc))), 0);
}

module.exports = add;
