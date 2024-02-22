//Number, not char, yes float, yes negative.
//fizz if divisible by 3, buzz if divisible by 5, fizzbuzz if divisible by 3 & 5, string and a number
//

function fizzBuzz(n) {
	//if % 3 print fizz % 5 print buzz 3 and 5 fizzbuzz
	let checkedNum = isNegativeOrFloat(n);
	let str = []
  
	for (let i = 1; i <= checkedNum; i++) {
	  if (i  % 3 === 0 && i % 5 === 0) {
		str.push('fizzbuzz')
	  } else if (i % 5 === 0) {
		str.push('buzz')
	  } else if (i % 3 === 0) {
		str.push('fizz')
	  } else {
		str.push(i.toString())
	  }
	}
	return str
  }
  
  function isNegativeOrFloat(n) {
	if (n < 0) {
	  n = Math.abs(n);
	} else if (Number(n) === n && n % 1 !== 0) {
	  n = Math.round(n);
	}
	return n;
  }
  
  //console.log(fizzBuzz(-3)); // 0, 1 , 2 , fizz
  //console.log(fizzBuzz(5.3)); // 0 , 1, 2, fizz, 4, buzz
  console.log(fizzBuzz(15)); // 0 ,1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz