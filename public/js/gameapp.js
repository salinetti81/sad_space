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
	
}]);

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

	
}]);

app.controller('EarthController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Earth';
	
}]);


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

}]);








app.controller('JupiterController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Jupiter';
	
}]);

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
}]);





app.controller('UranusController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Uranus';
	
}]);

//neptune start 
app.controller('NeptuneController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
// 	this.planet = 'Neptune';
// console.log("Don't Panic.")

// var memory_array = [ 'Thalassa', 'Thalassa', 'Despina', 'Despina', 'Galatea', 'Galatea', 'Naiad', 'Naiad', 'Larissa', 'Larissa', 'Proteus', 'Proteus', 'Triton', 'Triton', 'Nereclass', 'Nereclass', 'Halimede', 'Halimede' ];
// var memory_values = [];
// var memory_tile_ids = [];
// var tiles_flipped = 0;


// //shuffle tiles for new game
// Array.prototype.memory_tile_shuffle = function() {
// 	var i = this.length, j, temp;
// 	while(--i > 0) {
// 		j = Math.floor(Math.random() * (i+1));
// 		temp = this[j];
// 		this[j] = this[i];
// 		this[i] = temp;
// 	}
// }

// //create a new board
// function newBoard(){
// 	tiles_flipped = 0;
// 	var output = '';
//     memory_array.memory_tile_shuffle();
// 	for(var i = 0; i < memory_array.length; i++){
// 		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
// 	}
// 	document.getElementById('memory_board').innerHTML = output;
// }
//   window.addEventListener(newBoard());

// function memoryFlipTile(tile,val){
// 	if(tile.innerHTML == "" && memory_values.length < 2){
// 		tile.style.background = '#FFF';
// 		tile.innerHTML = val;
// 		if(memory_values.length == 0){
// 			memory_values.push(val);
// 			memory_tile_ids.push(tile.id);
// 		} else if(memory_values.length == 1){
// 			memory_values.push(val);
// 			memory_tile_ids.push(tile.id);
// 			if(memory_values[0] == memory_values[1]){
// 				tiles_flipped += 2;
// 				// Clear both arrays
// 				memory_values = [];
//             	memory_tile_ids = [];
// 				// Check to see if the whole board is cleared
// 				if(tiles_flipped == memory_array.length){
// 					alert("You won!");
// 					document.getElementById('memory_board').innerHTML = "";
// 					newBoard();
// 				}
// 			} else {
// 				function flip2Back(){
// 				    // Flip the 2 tiles back over
// 				    var tile_1 = document.getElementById(memory_tile_ids[0]);
// 				    var tile_2 = document.getElementById(memory_tile_ids[1]);
// 				    tile_1.style.background = 'blue';
//             	    tile_1.innerHTML = "";
// 				    tile_2.style.background = 'blue';
//             	    tile_2.innerHTML = "";
// 				    // Clear both arrays
// 				    memory_values = [];
//             	    memory_tile_ids = [];
// 				}
// 				setTimeout(flip2Back, 500);
// 			}
// 		}
// 	}
// }// ends neptune  

	
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
}]);




















