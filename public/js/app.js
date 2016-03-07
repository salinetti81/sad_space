
var app = angular.module('sadSpace', []);


app.controller('SignUpController', ['$http', function($http){
    var controller = this;
    this.signUpData = {};
    this.isLoggedIn = false;

    this.signUp = function(){
        console.log("SIGNUP function firing in app.js");

        console.log(this.signUpData);

        if (!user)
        $http({
            method: 'POST',
            url: '/users/signup',
            data: this.signUpData
        }).then(
            //success
            function(response){
                console.log(response);
                controller.isLoggedIn = true;
                controller.signUpData = {};
            },
            function(err){
                console.log(err);
            });       

    }; //<--signUp
    if (user)
    this.logIn = function(){
        console.log("LOGIN function firing in app.js")

        $http({

            method: 'POST',
            url: '/users/login',
            data: this.loginData
        }).then(
        //success
        function(response){
            console.log(response)

        },
        function(err){
            console.log(err)
        });

    }; //<--logIn

}]); //end form controller