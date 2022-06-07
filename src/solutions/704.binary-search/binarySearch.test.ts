import binarySearch from "./index";

describe("binarySearch tests" , ()=>{
    it("input:[-1,0,3,5,9,12] , target:9 , output:4" , ()=>{
        expect(binarySearch([-1,0,3,5,9,12],9)).toBe(4);
    });
    it("input:[-1,0,3,5,9,12] , target:2 , output:-1" , ()=>{
        expect(binarySearch([-1,0,3,5,9,12],2)).toBe(-1);
    });
    it("input:[-1,0,3,5,9,12] , target:0 , output:1" , ()=>{
        expect(binarySearch([-1,0,3,5,9,12],0)).toBe(1);
    });
});