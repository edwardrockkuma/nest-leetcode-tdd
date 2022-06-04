
/**
 * 
 * @param nums
 * @param target
 * @return result
 */
function twoSum (nums: number[] , target: number):number[] | undefined {
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