function add(numbers) {
    if (!numbers) return 0;
    return parseInt(numbers) || 0;
}

module.exports = add;
