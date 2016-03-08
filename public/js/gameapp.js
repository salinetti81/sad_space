var app = angular.module('gameApp', []);

app.controller('MainController', ['$http', '$scope', function($http, $scope){ 
	var controller = this;
	this.hello = 'hello';
	this.currentPlanet = null;
}]);

app.controller('VenusController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Mercury';
	
}])

app.controller('VenusController', ['$http', '$scope', function($http, $scope){ 
	var controller = this
	this.planet = 'Venus';
	controller.displayFire = true;
	this.changeBox = function(){
			controller.displayFire = !controller.displayFire;
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










