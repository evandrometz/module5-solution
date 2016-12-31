(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {

  var ctrl = this;

//signUpCtrl.user.completed=true;
//signUpCtrl.user.favorite = item;

  ctrl.submit = function () {
  ctrl.completed = true;
  };

ctrl.test = function(){
};
  ctrl.getFavoriteDish = function (){

    var promise = SignUpService.getItem(ctrl.user.favorite);
    promise.then(function (response){
      ctrl.user.favoriteDish = response.data;
      ctrl.user.favoriteDish.pictureUrl = ('https://evandrometz-solution5.herokuapp.com'+ '/images/' + ctrl.user.favoriteDish.short_name + '.jpg' );
      ctrl.user.incompleted=false;
      if(ctrl.user.favoriteDish.short_name === ctrl.user.favorite)
      {
        SignUpService.saveUser(ctrl.user);
      }
      ctrl.user.saved = true;
    })
    .catch(function (error){
      ctrl.user.incompleted=true;
      ctrl.user.saved = false;
    });
  }


}

})();
