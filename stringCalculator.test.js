const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("throws an error when input is not a string", () => {
    expect(() => add(5)).toThrow("Input must be a string");
    expect(() => add(null)).toThrow("Input must be a string");
    expect(() => add(undefined)).toThrow("Input must be a string");
    expect(() => add([])).toThrow("Input must be a string");
    expect(() => add({})).toThrow("Input must be a string");
});
