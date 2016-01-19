var number = prompt('Enter your number: ');
var exponent = prompt('Enter your exponent: ');


function pow(number, exponent) {

	if (exponent < 0) console.log('The Exponent should be a Real number!');

	else if (exponent == 0) console.log(1);

	else {
		var result = 1;

		for (var i = 0; i < exponent; i++) result *= number;
		console.log(result);
	}
}

pow(number, exponent);