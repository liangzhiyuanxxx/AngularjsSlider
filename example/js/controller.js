/**
 * Created by Administrator on 2016/8/5.
 */
!(function(angular){
    'use strict';
    var myModule = angular.module('myApp',[]);
    sliderTest(myModule);
    myModule.controller('firstCtrl', function($scope) {
        $scope.data = [{img: "img/1.jpg",link:'#'},{img: "img/2.jpg",link:'#'},{img: "img/3.jpg",link:'#'}];
    });
})(window.angular)