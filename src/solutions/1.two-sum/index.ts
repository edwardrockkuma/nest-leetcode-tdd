
/**
 * 
 * @param nums
 * @param target
 * @return result
 */
function twoSum (nums: number[] , target: number):number[] | undefined {
    // key:number in input array , value:index of number in input array
    const map: Record<number, number> = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num: number = nums[i];
        
        if (map[num] === undefined){
            map[target - num] = i;
        }
        else {
            return [map[num] , i];
        }
    }
}
export default twoSum;