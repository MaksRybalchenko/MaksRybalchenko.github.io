var names = [];

//names entering
for (var i = 0; i < 5; i++) {
	names[i] = prompt('Enter ' + (i + 1) + ' name:');
	console.log(names[i] + ' ');
};

var userName = prompt('Enter user name: ');

//looking for a sertain name
for (var i = 0; i < names.length; i++) {
	if (names[i] == userName){
	 	alert(userName + ', you successfully entered!');
	 	userName = false;
	 	continue;
	 };
};

//checking if the namae was found
if (userName != false) {
	alert('Error! The name was not found.')
};
