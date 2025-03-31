const add = require("./stringCalculator");

describe('Simple String calculator with a method', () => {
    test("return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });
    
    test("return the number itself for a single number", () => {
        expect(add("5")).toBe(5);
    });
});

describe('Allow the add method to handle any amount of numbers', () => {
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

    test("return sum from n new line seperated values", () => {
        const numbers = Array.from({ length: 50000 }, () => Math.floor(Math.random() * 100));
        const commaSeparated = numbers.join('\n');
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        
        expect(add(commaSeparated)).toBe(sum);
    });
});

describe('Support different delimiters', () => {
    test("semicolon (;) as a delimiter", () => {
        expect(add("//;\n1;2;6")).toBe(9);
    });

    test("Pipe (|) as a delimiter", () => {
        expect(add("//|\n9|1|2")).toBe(12);
    });

    test("Different delimiters while keeping existing functionality", () => {
        expect(add("//.\n11.12.13")).toBe(36);
        expect(add("//@\n9@1@1")).toBe(11);
        expect(add("//#\n110#80#30")).toBe(220);
    });

    test("Support default delimiters (comma and newline)", () => {
        expect(add("1,2\n3")).toBe(6);
    });
});

describe('Failed Simple String calculator with a method', () => {
    test("throws an error when input is not a string", () => {
        expect(() => add(5)).toThrow("Input must be a string");
        expect(() => add(null)).toThrow("Input must be a string");
        expect(() => add(undefined)).toThrow("Input must be a string");
        expect(() => add([])).toThrow("Input must be a string");
        expect(() => add({})).toThrow("Input must be a string");
    });
});


describe('Failed comma or new line seperated value', () => {
    test("throws an error when input must be a comma seperated or new line string", () => {
        expect(() => add("1,3,,5,")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("1,,3,,5")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("(1,,3,,5")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("1,3-5")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("1.35")).toThrow("Input must be a comma seperated or new line string");

        expect(() => add("1,3\n\n5,")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("1,,3\n,5")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("(1,,3,,5\n")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("1\n3-5")).toThrow("Input must be a comma seperated or new line string");
        expect(() => add("\n1.35")).toThrow("Input must be a comma seperated or new line string");
    });
});

