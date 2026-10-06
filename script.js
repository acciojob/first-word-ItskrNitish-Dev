function firstWord(s) {
  // your code here
	let str = s.trim();
	let res = '';
	for(let i=0; i<str.length; i++){
		res += str.charAt(i);
		if(str.charAt(i) === ' '){
			break;
		}
		
	}
	return res;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));  
