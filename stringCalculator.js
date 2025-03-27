function add(numbers) {
    if (typeof numbers !== 'string') 
        throw new Error("Input must be a string");

    if (!numbers) return 0;
    return parseInt(numbers) || 0;
}

module.exports = add;
