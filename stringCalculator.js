function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;

    const arrayNumbers = numbers.split(',');
    
    return arrayNumbers.reduce((sum, acc) => (parseInt(sum) + parseInt(acc)), 0);
}

module.exports = add;
