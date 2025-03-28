const add = require("./stringCalculator");

describe('Simple use case with single character or empty string', () => {
    test("return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });
    
    test("return the number itself for a single number", () => {
        expect(add("5")).toBe(5);
    });
});

describe('Multipe character use case', () => {
    test("return 4 for the two number 2,2", () => {
        expect(add("2,2")).toBe(4);
    });
    
    test("return 10 for the multiple numbers 1,2,2,5", () => {
        expect(add("1,2,2,5")).toBe(10);
    });
    
    test("return sum from n comma seperated values", () => {
        const numbers = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100));
        const commaSeparated = numbers.join(',');
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        
        expect(add(commaSeparated)).toBe(sum);
    });
});

describe('Failed use case for the single charactor or other', () => {
    test("return 4 for the two number 2,2", () => {
        expect(add("2,2")).toBe(4);
    });
    
    test("return 10 for the multiple numbers 1,2,2,5", () => {
        expect(add("1,2,2,5")).toBe(10);
    });
    
    test("return sum from n comma seperated values", () => {
        const numbers = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100));
        const commaSeparated = numbers.join(',');
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        
        expect(add(commaSeparated)).toBe(sum);
    });
});
