
/* ===============  Test 1  ================= */
/* 
function magic_multiply(x, y){
	x = x*y;
	return x;
}

let test1 = magic_multiply(5, 2);
console.log('test1' + ":" + test1); */


/* ===============  Test 2  ================= */

/* function magic_multiply(x, y){
	x = x*y;
	return x;
}

let test2 = magic_multiply(0, 0);
console.log('test2' + ":" + test2);
 */

/* ===============  Test 3  ================= */

/* function magic_multiply(x, y){
	for (let i =0; i <x.length; i++){
		x[i] = x[i]*y;
	}
	return x;
}

let test3 = magic_multiply([1, 2, 3], 2);
console.log('test3' + ":" + test3);
 */

/* ===============  Test 4  ================= */
/* 
function magic_multiply(x, y){
	x = x*y;
	return x;
}

let test4 = magic_multiply(7, "three");
console.log('test4' + ":" + test4);
 */

/* ===============  Test 5  ================= */


function magic_multiply(x, y){
	return Array(y +1).join(x);
}


/* function magic_multiply(x, y){
	var newArr = [];
	for (let i=0; i< y;){
		newArr[i++] = x;
	}
	return newArr.join('');
} */

let test5 = magic_multiply("Brendo", 4);
console.log('test5' + ":" + test5);







