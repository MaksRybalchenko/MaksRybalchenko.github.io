var app = {
	counter:0,
	currentAnswer: undefined,
	correctAnswers:0,
	questions:[["What is JavaScript?",["The dialect of Marcian language.","Some fancy word nerdy people tend to use every now and then.","Dynamic computer programming language.","Name of my neighbor's cat"],2],["Now get your brain in gear. Here comes real questions:<br><br>(function(){<br> &nbsp&nbsp&nbsp&nbsp return typeof arguments;<br>})();",["\"object\"","\"array\"","\"arguments\"","\"undefined\""],0],["  var f = function g(){ return 23; };<br>&nbsp&nbsp&nbsp&nbsptypeof g();",["\"number\"","\"undefined\"","\"function\"","Error"],3],["var y = 1, x = y = typeof x;<br>&nbsp&nbsp&nbsp&nbspx;",["1","\"number\"","undefined","\"undefined\""],3],["  (function f(f){<br>&nbsp&nbsp&nbsp&nbsp  return typeof f();<br>})(function(){ return 1; });",["\"number\"","undefined","\"function\"","Error"],0],["var f = (function f(){ return \"1\"; }, function g(){ return 2; })();<br>&nbsp&nbsp&nbsp&nbsp typeof f;",["\"string\"","number","\"function\"","undefined"],1],["var x = [typeof x, typeof y][1];<br>&nbsp&nbsp&nbsp&nbsp typeof typeof x;",["\"number\"","string","\"undefined\"","\"object\""],1],["(function f(){<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp function f(){ return 1; }<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp return f();<br>&nbsp&nbsp&nbsp&nbsp function f(){ return 2; }<br>})();",["1","2","Error","undefined"],1]],
	init: function() {
		this.bindEvents();
	},

	bindEvents: function(){
		var userSubmit = document.querySelector(".submit");
		userSubmit.addEventListener("click", this.switchScreen);
	},

	switchScreen: function(){
		// first we have to make a small check on user inputs
		var inputList = document.querySelectorAll(".login input");
		var container =  document.querySelector(".visible");
		if(inputList[0].value=="" || inputList[1].value==""){
			swal("Come on dude, fill the form and get your hands dirty with the test!");
		}
		else{
		container.className = "hidden";
		app.createTestHTML();
		}
		// WHY .this keyword in switchScreen method refers to a button element, but not to the app object??????
	},

	createTestHTML: function(){
		var testContainer = document.createElement("div");
		testContainer.setAttribute("class","test-container");
		document.body.appendChild(testContainer);
		// Creating a Form
		var form = document.createElement("form")
		form.setAttribute("id","test-form");
		testContainer.appendChild(form);
		// Creating a  Button
		var check = document.createElement("button");
		check.setAttribute("id","test-button");
		check.className="check animated fadeIn";
		var t =document.createTextNode("check")
		check.appendChild(t);
		document.body.appendChild(check);
		//Next module
		this.startTest();
	},
	createQuestion:function(){
		var testContainer =this.getTestContainer();
		var question = document.createElement("p");
		question.setAttribute("class","question animated fadeInDown");
		testContainer.insertBefore(question, testContainer.firstChild);	
		return document.querySelector(".question");
	},

	startTest: function(){
		this.fillHTML()
	},

	getTestContainer:function(){
		return document.querySelector(".test-container");
	},
	getTestButton:function(){
		return document.getElementById("test-button");
	},

	fillHTML:function() {
		var question = this.createQuestion();
		var testContainer = this.getTestContainer();
		var form = document.getElementById("test-form");
		// Updating a QUESTION
		question.innerHTML = this.questions[this.counter][0];
		// Updating ANSWERS
		for (var answer in this.questions[this.counter][1])
		{
			var radio = document.createElement("input");
			radio.setAttribute("type","radio");
			radio.setAttribute("name","answer");
			radio.setAttribute("class","radio");
			form.appendChild(radio);
			var variant = document.createElement("p");
			var text = document.createTextNode(this.questions[this.counter][1][answer]);
			variant.appendChild(text);
			variant.setAttribute("class","answers animated fadeInUp");
			form.appendChild(variant);
		}
		this.checkAnswers();
	},

	checkIfAnyAnswerChosen: function(){
		// Check wether any answer chosen and if chosen saves the index of a that radio into this.currentAnswer
		var radios = document.querySelectorAll('.radio');
		var value;
		for (var i = 0; i < radios.length; i++) {
		    if (radios[i].type === 'radio' && radios[i].checked) {
		        value = radios[i].value; 
		        this.currentAnswer = i; 
    		}
		}
		if(value)  {
			return true;
		}          
		else {
			return false;
		}  
	},

	checkAnswers: function(){
		var check = document.getElementById("test-button");
		var listener = function(){
			if (app.checkIfAnyAnswerChosen()) {
				// Code below finds out wether user has chosen the correct answer
				var answers = app.getTestContainer().querySelectorAll(".answers");
				var correct  =  app.questions[app.counter][2];
				var userAnswer = app.currentAnswer;
				if (correct == userAnswer) {
					answers[correct].classList.add("correct");
					app.correctAnswers++;
					swal("Congratilations!", "You chose wisely. You can proceed to the next question now!", "success");
				}
				else {
					answers[correct].classList.add("correct");
					answers[userAnswer].classList.add("incorrect");
					sweetAlert("You chose poorly :(", "Your answer is incorrect. Try harder next time!", "error");
				}
				check.className = "next";
				check.innerHTML = "next";
				check.removeEventListener("click", listener);
				app.nextQuestion();
			}
			else {
				swal({   title: "Dude!",   text: "Choose a fucking answer!",   imageUrl: "../img/tars.jpg" });
			}
		}
		check.addEventListener("click", listener);
	},
	nextQuestion:function(){
		var button = this.getTestButton();
		var form = document.getElementById("test-form");
		var question = document.querySelector(".question");
		this.counter++;
		var listener = function(){
			// first we have to get rid of our previous answers
			form.innerHTML = "";
			// then add a new question and answers
			// but before that we have to check whether we still have any questions left
			if (app.questions[app.counter]) {
				// update button
				var next = document.getElementById("test-button");
				next.className = "check";
				next.innerHTML = "check";
				app.getTestContainer().removeChild(question);
				button.removeEventListener("click", listener);
				// fill new questions
				app.fillHTML();

			}
			else {
				var container = app.getTestContainer();
				container.innerHTML="";
				document.body.removeChild(button);
				if(app.correctAnswers > (app.counter/2)){

					container.classList.add("test-success");

					swal("Congratilations!", "You saved our planet from JavaScript ignorance. You can have that can of beer now!", "success");
				}
				else {
					swal("Too bad, try again!");
					container.classList.add("failure");
				}

			}
		};
		button.addEventListener("click", listener);
	}


}
app.init();