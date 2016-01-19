
var names = [];

//names entering
for (var i = 0; i < 5; i++) {
	names[i] = prompt('Enter ' + (i + 1) + ' name:');
	console.log(names[i] + ' ');
};

var userName = prompt('Enter user name: ');

//looking for a sertain name
search(userName);

function search (searchName) {
	for (var i = 0; i < names.length; i++) {
		if (names[i] == searchName){
		 	alert(searchName + ', you successfully entered!');
		 	return;
		};
	};
	alert('Error! The name was not found.')
}
