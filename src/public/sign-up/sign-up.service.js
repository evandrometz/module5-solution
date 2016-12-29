(function () {
'use strict';

angular.module('public')
.service('SignUpService', SignUpService)
.constant('HerokuPath', "https://evandrometz-solution5.herokuapp.com/menu_items/")
;

var user;

SignUpService.$inject = ['$http','HerokuPath']
function SignUpService( $http, HerokuPath) {
  var service = this;


service.getItem = function (favorite) {
  var response = $http({
    method: "GET",
    url: (HerokuPath + favorite + ".json")
  });
  return response;
}

service.saveUser = function ( firstName,lastName, email, phone, favorite){

console.log("no serviço");
console.log(firstName, lastName, email, phone,favorite);

  var serviceFirstName = firstName;
  var serviceLastName = lastName;
  var serviceEmail = email;
  var servicePhone = phone;
  var serviceFavoriteDish = favorite;
  console.log(serviceFirstName, serviceLastName, serviceEmail, servicePhone,serviceFavoriteDish);
}

 service.getUser = function (){
   user.firstname = serviceFirstName;
   user.lastName = serviceLastName;

   console.log(user.firstname);
 return user;
}
}

})();
