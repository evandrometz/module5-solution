(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var ctrl = this;

  //$ctrl.getUser = function (){
    ctrl.user = SignUpService.getUser();

    console.log('user', ctrl.user);
  //}
}

})();
