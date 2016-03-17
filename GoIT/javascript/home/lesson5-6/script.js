var interval = 0;

var timer = {
	hours: 0,
	minutes: 0,
	seconds: 0,
	miliseconds: 0,

	elements: {
		hours: document.getElementById('hours'),
		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
		miliseconds: document.getElementById('miliseconds')
	},

	setTime: function() {	
		this.elements.hours.innerHTML = this.hours;
		this.elements.minutes.innerHTML = this.minutes;
		this.elements.seconds.innerHTML = this.seconds;
		this.elements.miliseconds.innerHTML = this.miliseconds;


		if(this.elements.hours.innerHTML < 10){
			this.elements.hours.innerHTML = "0" + this.hours  + " : ";	
		} else{
			this.elements.hours.innerHTML = this.hours  + " : ";
		}

		if(this.elements.minutes.innerHTML < 10){
			this.elements.minutes.innerHTML = "0" + this.minutes  + " : ";		
		} else{
			this.elements.minutes.innerHTML = this.minutes  + " : ";
		}

		if(this.elements.seconds.innerHTML < 10){
			this.elements.seconds.innerHTML = "0" + this.seconds;		
		} else{
			this.elements.seconds.innerHTML = this.seconds;
		}
		if(this.elements.miliseconds.innerHTML < 10){
			this.elements.miliseconds.innerHTML = "00" + this.miliseconds;		
		} else if(this.elements.miliseconds.innerHTML < 100 && this.elements.miliseconds.innerHTML >= 10){
			this.elements.miliseconds.innerHTML = "0" + this.miliseconds;
		}else{
			this.elements.miliseconds.innerHTML = this.miliseconds;
			
		}
	},

	run: function() {
		var time = 0;
		var self = this;

		interval = setInterval(function() {
			time++;
			self.miliseconds += 4;

			if(self.miliseconds % 1000 === 0){
				time = 0;
				self.miliseconds = 0;
				self.seconds++;

				if(self.seconds % 60 === 0){
					time = 0;
					self.seconds = 0;
					self.minutes++;
				
					if(self.minutes % 60 === 0){
						time = 0;
						self.minutes = 0;
						self.hours++;
					}
				}
			}

			self.setTime();
		}, 1);
		
	}
}


var start = document.querySelector('.startButton');
var reset =document.querySelector('.resetButton');

function startHendler(){
	if(this.innerHTML === "start"){
		this.innerHTML = "pause";
		timer.run();
		console.log('started');
	} else {
		this.innerHTML = "start";
		clearInterval(interval);
		console.log('paused');
	}	
}

function resetHendler(){
	clearInterval(interval);
	start.innerHTML = "start";
	timer.hours = 0;
	timer.minutes = 0;
	timer.seconds = 0;
	timer.miliseconds = 0;

	timer.elements.hours.innerHTML = "00 :";
	timer.elements.minutes.innerHTML = "00 :";
	timer.elements.seconds.innerHTML = "00 ";
	timer.elements.miliseconds.innerHTML = "000";
}

function splitHendler(){
	
}
start.addEventListener('click', startHendler);

reset.addEventListener('click', resetHendler);

