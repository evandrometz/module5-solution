(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {

    console.log("Na controller");
  var ctrl = this;

//signUpCtrl.user.completed=true;
//signUpCtrl.user.favorite = item;

  ctrl.submit = function () {
  ctrl.completed = true;
  };

ctrl.test = function(){
  console.log("Na função teste");
};
  ctrl.getFavoriteDish = function (){

    console.log("Na função");
    var promise = SignUpService.getItem(ctrl.user.favorite);
    promise.then(function (response){
      ctrl.user.favoriteDish = response.data;
      ctrl.user.favoriteDish.pictureUrl = ('https://evandrometz-solution5.herokuapp.com'+ '/images/' + ctrl.user.favoriteDish.short_name + '.jpg' );
      console.log('prato favorito', ctrl.user.favoriteDish);
      ctrl.user.incompleted=false;
      console.log(ctrl.user.incompleted);
      SignUpService.saveUser(ctrl.user);
      ctrl.user.saved = true;
    })
    .catch(function (error){
      ctrl.user.incompleted=true;
      console.log(error);
      console.log(ctrl.user.incompleted);
      ctrl.user.saved = false;
    });
  }


}

})();
