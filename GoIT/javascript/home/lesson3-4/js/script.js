var body = document.querySelector('body');


var app = {
	
	createElement: function (params){

		var object = document.createElement(params.tagName);

		if (params.inputType) {
			object.setAttribute('type', params.inputType);
		};

		if (params.className) {
			object.className = params.className;
		};
		
		if (params.content) {
			object.innerHTML = params.content;
		};

		if (params.parentElement) {
			params.parentElement.appendChild(object);
		};

		return object;
	},


	generateQuestions: function(questionsAmount, answersAmount){

		for (var i = 0; i < questionsAmount; i++) {
			this.createElement({
				tagName: 'h2',
				content: "Question No." + (i + 1),
				parentElement: form
			});


			for (var j = 0; j < answersAmount; j++) {
				var label = this.createElement({
					tagName: 'label',
					content: ' Answer No.' + (j + 1),
					parentElement: form
				});

				var checkbox = app.createElement({
					tagName: 'input',
					inputType: 'checkbox'
				});

				label.insertAdjacentElement('afterBegin', checkbox);
			}
		};
	}
}


app.createElement({
	tagName: 'h1',
	content: 'Programming Test',
	parentElement: body
});

var form = app.createElement({
	tagName: 'form',
	parentElement: body
});

app.generateQuestions(5, 3);

app.createElement({
	tagName: 'input',
	inputType: 'submit',
	content: 'Check my results',
	parentElement: body
});