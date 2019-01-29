(function () {
  'use strict'

  var shoppingList=[
    {
      name:"Milk",quantity:"2"
    },
    {
      name:"Donuts",quantity:"20"
    },
    {
      name:"cookies",quantity:"30"
    },
    {
      name:"Chocolate",quantity:"40"
    },
    {
      name:"Biscuits",quantity:"50"
    }
    ];
    var shoppedList=[

    ];
var app = angular.module("myApp", []);
app.controller("ShoppingListController", function($scope) {
  $scope.shoppingList= shoppingList;
  $scope.shoppedList=shoppedList;

  $scope.addToBought=function(newItemQuantity,newItemName,index){
    var newItem={
          quantity:newItemQuantity,
            name:newItemName
        };
    $scope.shoppedList.push(newItem);
    $scope.shoppingList.splice(index,1);

  };
});
})();
