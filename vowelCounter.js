/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
	let ret  = text.toLowerCase();
	let count = 0;
	
	  for(let i = 0 ; i < ret.length ; i++){
		if(ret[i] === 'a' || ret[i] === 'e' || ret[i] === 'i' || ret[i] === 'o' || ret[i] === 'u'){
		  count++;
		}
	  }
  
	return count;
  }
  
  
  console.log(vowelsCounter('anehizxcv'))