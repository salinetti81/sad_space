var app = angular.module('gameApp', []);

var codeBox = function(ans, con) {
	// console.log('line 4', ans)
	var el = document.getElementById(con);
  // el && eval(el.value);
  if(el && eval(el.value) === ans){
  	console.log(eval(el.value))
  	// console.log('line 9',ans);
  	return true
  }else{
  	// console.log(con)
  	console.log(eval(el.value))
  	// console.log(ans);
  	// console.log('Hmmm the out put was', eval(el.value) ,'instead of', ans)
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
	this.clickEvent= function(){
		for (var i = 0; i < 5; i++) {
		var main = document.getElementById('saturn-board')	
		var div = document.createElement("div");
		div.setAttribute("ng-click", "saturn.clickEvent()")
		div.setAttribute("class","ring");
		main.insertBefore(div, main.firstChild);
		};
		
            // if (isClickable) {
            //     attrs.$setAttributet('ngClick', 'onHandleClick()');
            //     element.removeAttr('ng-transclude');
            //     $compile(element)(scope);
            // }






	}
}])





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
	ans:4,
	id:'a',
	mes:null
	},
	{
	ans:10,
	id:'b',
	mes:null
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
			



			console.log(mes)
	
			// return mes 
		// console.log(mes)
		// if(x === true){
		// 	mes = true
		// 	console.log(qus, con, mes)
		// }else{
		// 	mes = false;
		// 	console.log(false);
		// 	console.log(mes,'mes')
		// }
		// return mes;
	};

}])//ends pluto 




















