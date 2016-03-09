var app = angular.module('gameApp', []);

app.controller('MainController', ['$http', '$scope', function($http, $scope){ 
	var controller = this;
	this.hello = 'hello';
	this.currentPlanet = null;
	 // $scope.$on('lostVenusGame', function(eventObj, data){
	 	// console.log(controller.currentPlanet)
        // controller.currentPlanet = null;
        // if(controller.currentPlanet === null) {
        // 	console.log('if', controller.currentPlanet)
        // 	controller.currentPlanet = 'venus'
        //  console.log('after if', controller.currentPlanet)
        // }
    // });

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
		if(controller.clickCount >= 1){
				controller.failMessage = true;
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

app.controller('JupiterController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Jupiter';
	
}])

app.controller('SaturnController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Saturn';
	
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
	
}])










