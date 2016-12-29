(function () {
"use strict";

angular.module('public')
.component('signup', {
  templateUrl: 'src/public/sign-up/sign-up.html',
  bindings: {
    item: '<'
  },
  controller: MyInfoController
});


MyInfoController.$inject = ['HerokuPath'];
function MyInfoController(HerokuPath) {
  var $ctrl = this;
  $ctrl.basePath = HerokuPath;
}

})();
