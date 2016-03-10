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


// ======================================================
//--------------MAIN--------------
// ======================================================


app.controller('MainController', ['$http', '$scope', function($http, $scope){ 
	var controller = this;
	this.hello = 'hello';
	this.currentPlanet = null;

}]);


// ======================================================
//--------------MERCURY--------------
// ======================================================



app.controller('MercuryController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Mercury';
	
}])


// ======================================================
//--------------VENUS--------------
// ======================================================

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



// ======================================================
//--------------EARTH--------------
// ======================================================

app.controller('EarthController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Earth';
	
}])



// ======================================================
//--------------MARS--------------
// ======================================================

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



// ======================================================
//--------------JUPITER--------------
// ======================================================



app.controller('JupiterController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Jupiter';
	
}])


// ======================================================
//--------------SATURN--------------
// ======================================================


app.controller('SaturnController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Saturn';
	this.clickEvent= function(){
		alert('hello')
		var div = document.createElement("div");
		div.className = 'ring';
    document.body.appendChild(div)
	}
}])


// ======================================================
//--------------URANUS--------------
// ======================================================

app.controller('UranusController', ['$http', '$scope', function($http, $scope){ 
    var controller = this;
    this.planet = 'Uranus';
  this.minefield = {};

         this.getSpot = function(minefield, row, column) {
              // console.log(minefield,'this is 136')
          return controller.minefield.rows[row].spots[column];
      }

        this.placeRandomMine = function(minefield) {
            console.log('line 143 running random function')
             var row = Math.round(Math.random() * 8);
             console.log(row,'line 148');
             var column = Math.round(Math.random() * 8);
             console.log(column,'line 150');
             var spot = controller.getSpot(controller.minefield, row, column);
             spot.content = "bomb";
    
        } // ends place random mine function

            this.placeMultipleMines = function(minefield) {
        for(var i = 0; i < 10; i++) {
            controller.placeRandomMine(controller.minefield);
            // console.log(minefield);
        }
    }

     
//creates the mine field
        this.createMinefield = function(spot) {
                // console.log(minefield);
        // console.log(minefield);
        controller.minefield.rows = [];
        // console.log(minefield);
        for(var i = 0; i < 9; i++) {
            var row = {};
            row.spots = [];
            // console.log(row)
            // console.log(row);
            for(var j = 0; j < 9; j++) {
                var spot = {};
                spot.isCovered = true;
                // spot.isRevealed = false;
                spot.content = "empty";
                // console.log(spot);
                row.spots.push(spot);
            }
            controller.minefield.rows.push(row);
                      // console.log(minefield);
        }
        // console.log(minefield);
        // console.log('Minefield rows: ', minefield.rows);

        console.log('Minefield row: ', this.minefield.rows);
     
      //Place 1 random mine
      var row = Math.round(Math.random() * 8);
      console.log("row: " + row);
      var column = Math.round(Math.random() * 8);
      console.log("column: " + column);


         controller.placeMultipleMines();
} // ===================end create minefield===============================


//==========MAKE NUMBERS==================

// this.createNumber = function(minefield, row, column) {
//     this.thisSpot = controller.getSpot(minefield, row, column);
// }

// //check if spot has a mine in it
//     if (controller.thisSpot.content == "bomb") {
//         return;
//     }

//     this.bombCount = 0;

//     //check above row
//     if(row > 0) {
//         //check column to left
//         this.spot = getSpot(minefield, row - 1, column - 1);
//         if(spot.content == "bomb") {
//             bombCount++;
//         }
//     }
// //get spot just above
// this.spot = getSpot(minefield, row - 1, column);
// if(spot.content == "bomb") {
//     bombCount ++;
// }

// //check colum to the right
// if(column < 8) {
//     //get spot above and to the right
//     this.spot = getSpot(minefield, row - 1, column + 1);
//     if(spot.content == "bomb") {
//         bombCount++
//     }
// }



}])//ends Uranus




//neptune start 
app.controller('NeptuneController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	
}])


// ======================================================
//--------------PLUTO--------------
// ======================================================



// app.controller('PlutoController', ['$http', '$scope', function($http, $scope){ 
// 	var controller = this
// 	this.planet = 'Pluto';

	
// }])

// 	this.questions = [
// 	{
// 	ans:4,
// 	id:'a',
// 	mes:null
// 	},
// 	{
// 	ans:10,
// 	id:'b',
// 	mes:null
// 	},
// 	{
// 	ans:20,
// 	id:'c',
// 	mes:null
// 	},
// 	{
// 	ans:30,
// 	id:'d',
// 	mes:null
// 	}];


// 	this.run = function(qus, con, mes){
// 			mes = codeBox(qus ,con);
// 			id = con;
// 			var array = controller.questions;
// 			for (var i = 0; i < array.length; i++) {
// 				if (array[i].id == id) {					
// 					return array[i].mes = mes;
					
// 				}
// 			};
// 	}


// }]);
























