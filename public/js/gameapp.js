var app = angular.module('gameApp', []);

var codeBox = function(ans, con) {
	var el = document.getElementById(con);
		console.log(eval(el.value))  	

  if(el && eval(el.value) === ans){
  	console.log(eval(el.value))
  	return true
  }else{
  	console.log(eval(el.value))  	
  	return false
	}
}





app.controller('MainController', ['$http', '$scope', function($http, $scope){ 
	var controller = this;
	this.hello = 'hello';
	this.currentPlanet = null;
}]);

app.controller('MercuryController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Mercury';
	
}])

app.controller('VenusController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Venus';
	this.clickCount = 0;
	this.failMessage = false;
	this.addOne = function(){
		controller.clickCount++;
		if(controller.clickCount >= 15){
				controller.failMessage = true;
				controller.clickCount = 0;
		}	
	}
	this.playAgain = function(){
		controller.failMessage = false;
		controller.clickCount = 0;
	}	

	
}])

app.controller('EarthController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Earth';
	
}])





app.controller('MarsController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Mars';
	this.score =  0;
	this.check = function(qus, ans){
		console.log('working')
		console.log('qus',qus, 'ans', ans)
		if(qus === ans){
			controller.score++;
			console.log(controller.score);
			// controller.qus.clicked = true;
		}
		// this.ans = null;
	}
	this.qOne = {
		answer:"Question 1",
		bool:false,
		clicked:true
	};
	// this.qTwo = true;
		this.qTwo = {
		answer:"Question 2",
		bool:true,
		clicked:false
	};
		this.qThree = {
		answer:"Question 3",
		bool:false,
		clicked:false
	};
	this.qFour = {
		answer:"Question 4",
		bool:false,
		clicked:false
	};
	this.qFive = {
		answer:"Qeistion 5 ",
		bool:false,
		clicked:false
	};
	this.qSix = {
		answer:"Question 6",
		bool:false,
		clicked:false
	};
	this.qSeven = {
		answer:"Question 7",
		bool:false,
		clicked:false
	};
	this.qEight = {
		answer:"Question 8",
		bool:false,
		clicked:false
	};
		this.qNine = {
		answer:"Question 9",
		bool:false,
		clicked:false
	};
	this.qten = {
		answer:"Question 10",
		bool:false,
		clicked:false
	};

}])







app.controller('JupiterController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Jupiter';
	
}])

app.controller('SaturnController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Saturn';
	this.count = 0;
	this.clickEvent = function(x){
		console.log('working');
		for (var i = 0; i < x; i++) {
			var main = document.getElementById('ring-board')	
			var ringdiv = document.createElement("div");
			ringdiv.setAttribute("ng-click", "saturn.newClick()");
			ringdiv.setAttribute("class","ring");
			main.insertBefore(ringdiv, main.firstChild);
			// main.appendChild(ringdiv);
			controller.count++;
		};
	}
}]);

// this.rings = []


// ng-repeat x number of times
//
// div ng-repeat ring in satCtrl.ringstuff 
//		div     class="ring" ng-click="satCtrl.clickevent()"     /div
// /div





app.controller('UranusController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Uranus';
	
}])

app.controller('NeptuneController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Neptune';
	
}])

app.controller('PlutoController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Pluto';
	this.questions = [
	{
	ans:10,
	id:'a',
	mes:null,
	ques:'Write a function that adds 5 plus 5!'
	},
	{
	ans:13882848.000000002,
	id:'b',
	mes:null,
	ques:'Write a function that determines how many hours are in one pluto year'
	},
	{
	ans:20,
	id:'c',
	mes:null
	},
	{
	ans:30,
	id:'d',
	mes:null
	}];

	this.run = function(qus, con, mes){
			mes = codeBox(qus ,con);
			id = con;
			var array = controller.questions;
			for (var i = 0; i < array.length; i++) {
				if (array[i].id == id) {					
					return array[i].mes = mes;
					
				}
			};	
	};

}])




















