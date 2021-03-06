/* 
* Test case for the use of objects with single properties.
* Output of the function is of type Number
*/

function fibonacciObj(object) {
	var n = object.value;
	fibonacci1(n);

}

function fibonacci1(n) {
	if (n == 0 || n == 1)
		return n;
	else
		return fibonacci1(n - 1) + fibonacci1(n - 2);

}

fibonacciObj({value:4});
