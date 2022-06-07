import isValid from "./index";

describe("valid parentheses tests" , ()=>{
    it("Input: s = '()' , Output: true" , ()=>{
        expect(isValid('()')).toBe(true);
    });
    it("Input: s = '()[]{}' , Output: true" , ()=>{
        expect(isValid("()[]{}")).toBe(true);
    });
    it("Input: s = '()[{]}' , Output: false" , ()=>{
        expect(isValid('()[{]}')).toBe(false);
    });
    it("Input: s = '()[{}]' , Output: true" , ()=>{
        expect(isValid('()[{}]')).toBe(true);
    });
    it("Input: s = '' , Output: false" , ()=>{
        expect(isValid('')).toBe(false);
    });
    it("Input: s = '[' , Output: false" , ()=>{
        expect(isValid('[')).toBe(false);
    });
});