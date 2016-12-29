(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {

    console.log("Na controller");
  var signUpCtrl = this;

//signUpCtrl.user.completed=true;
//signUpCtrl.user.favorite = item;

  signUpCtrl.submit = function () {
  signUpCtrl.completed = true;
  };

signUpCtrl.test = function(){
  console.log("Na função teste");
};
  signUpCtrl.getFavoriteDish = function (favorite, firstName, lastName, email, phone){

    console.log("Na função");
    var promise = SignUpService.getItem(favorite);
    promise.then(function (response){
      signUpCtrl.user.favoriteDish = response.data;
      console.log(signUpCtrl.user.favoriteDish);
      signUpCtrl.user.incompleted=false;
      console.log(signUpCtrl.user.incompleted);
      SignUpService.saveUser(firstName,lastName,email,phone,favorite);
      signUpCtrl.user.saved = true;
    })
    .catch(function (error){
      signUpCtrl.user.incompleted=true;
      console.log(error);
      console.log(signUpCtrl.user.incompleted);
      signUpCtrl.user.saved = false;
    });
  }


}

})();
