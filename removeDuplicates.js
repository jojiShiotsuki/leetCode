//arr, in non-decreasing order, [integer], can be negative, not char, not float, can be empty
//return an arr and the length of the array.

function removeDuplicates(arr) {

	const unique = new Set(arr)
  
	let uniqueArr = Array.from(unique)
	
	return uniqueArr;
  }
  
  console.log(removeDuplicates([0, 0, 0, 0, 0]), [0, 1, 2], 3);
  console.log(removeDuplicates([0, 0, 1]), [0, 1], 2);
  console.log(removeDuplicates([]), [], 0);
  