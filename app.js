(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', function ($scope) {
  $scope.input = "";

  $scope.TooMuchorWhat = "";

  $scope.displayTooMuchorWhat = function () {
    var itemCount = calculateNumberOfItem($scope.input);
    if(!$scope.input){
        $scope.TooMuchorWhat = "Please input data first";
    }else if (itemCount >= 4) {
        $scope.TooMuchorWhat = "Too Much!";
    }else {
        $scope.TooMuchorWhat = "Enjoy!";
    }

    console.log("itemCount::" + itemCount);
  };


  function calculateNumberOfItem(string) {
    var totalStringValue = 0;
    var partsOfStr = string.split(',');
    return partsOfStr.length;
  }

});


})();
