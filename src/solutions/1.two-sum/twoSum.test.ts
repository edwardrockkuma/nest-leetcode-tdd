import twoSum from "./index";

describe("two-sum" ,()=>{
    it("[2,7,11,15] , 9" , ()=>{
        expect( twoSum([2,7,11,15] , 9) ).toEqual([0,1]);
    })
    
    it("[3, 2, 4], 6" , ()=>{
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    })

    it("[3, 3], 6" , ()=>{
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    })
});