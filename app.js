var app = angular.module('plunker', ["truncate"]);


app.controller('responsive', function($scope){
	
    $scope.width = 0;
});

app.controller('demoController', function ($scope, $window) {

    $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    $scope.numChars = 20;
    $scope.numWords = 5;
    $scope.breakOnWord = false;


    
    $scope.width = 0;
	
	$scope.updateWidth = function() {
        $scope.width = $window.innerWidth;
    }

    $scope.updateHeight = function() {
       $scope.height = $window.innerHeight;
    }
    
    $scope.columnAdjustments = function() {
        if ($scope.width < 768) {
            console.log(' width < 768 pixel ');

            
        } else if ($scope.width >= 1024 ){
            console.log(' width >= 1024 pixel ');

            
        } else {
            console.log(' width is between 768 and 1024 pixels ');

             
        }
    }
    
    $scope.updateWidth();
    $scope.updateHeight();
    $scope.columnAdjustments();

    $window.onresize = function () {
        $scope.updateWidth();
        $scope.updateHeight();
        $scope.columnAdjustments();
        $scope.$apply();
    }
});


app.controller('mixedcontroller', function ($scope, $window) {
	// default scope values will be overriden here
	
    $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    $scope.numChars = 10;  // must be defined by the user
    $scope.numWords = 5;   // must be defined by the user
    
    $scope.breakOnWord = false;
    
    $scope.width = 0;

    /* initialize output text */
    $scope.normalsz = false;
    $scope.mediumsz = false;
    $scope.smallsz  = false;
	
	$scope.updateWidth = function() {
        $scope.width = $window.innerWidth;
    }

    $scope.updateHeight = function() {
       $scope.height = $window.innerHeight;
    }
    
    $scope.columnAdjustments = function() {
        if ($scope.width < 768) {
            console.log(' width < 768 pixel ');  // we have a mobile device
            $scope.numChars = 5;
            $scope.numWords = 2;

            $scope.normalsz = false;
            $scope.mediumsz = false;
            $scope.smallsz = true;

        }
        else if($scope.width >= 1024){
            console.log(' width is between 768 and 1024 pixels ');  // we have pc device
            $scope.numChars = 22;
            $scope.numWords = 6;

            $scope.normalsz = true;
            $scope.mediumsz = false;
            $scope.smallsz  = false;

        }
        else{
            console.log(' 1024 pixel> width > 768 ');  // we have a tablet device
            $scope.numChars = 14;
            $scope.numWords = 4;

            $scope.normalsz = false;
            $scope.mediumsz = true;
            $scope.smallsz  = false;
            
        }
        
    }
    
    $scope.updateWidth();
    $scope.updateHeight();
    $scope.columnAdjustments();

    $window.onresize = function () {
        $scope.updateWidth();
        $scope.updateHeight();
        $scope.columnAdjustments();
        $scope.$apply();
    }
});
