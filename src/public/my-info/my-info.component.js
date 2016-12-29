(function () {
"use strict";

angular.module('public')
.component('myinfo', {
  templateUrl: 'src/public/my-info/my-info.html',
  bindings: {
    user: '<'
  },
  controller: MyInfoController,
  controllerAs: myInfoCtrl
})


.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var myInfoCtrl = this;
  myInfoCtrl.user = SignUpService.getUser();
}
;
})();
