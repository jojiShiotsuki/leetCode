// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

//1st array(not char,  whole number,  always positive, not empty) 2nd n = not char, whole number, always positive.
//returning number.
// 3, [0 ,2 , 1] = return 3.
// 2, [1,0]  = return 2.
// 6, [1,2,0,3,5,4] = 6.

function findMissingNumber(arr) {
	let n = arr.length;
  
	let expectedSum = (n * (n + 1)) / 2;
  
	let actualSum = arr.reduce((sum, n) => sum + n, 0);
  
	return expectedSum - actualSum;
  }
  
  console.log(findMissingNumber([1, 2, 0, 3, 5, 4], 6), 6);
  console.log(findMissingNumber([0, 2, 1], 3), 3);
  console.log(findMissingNumber([1, 0], 2), 2);
  