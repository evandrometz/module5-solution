(function () {
'use strict';

angular.module('public')
.service('SignUpService', SignUpService)
.constant('HerokuPath', "https://evandrometz-solution5.herokuapp.com/menu_items/")
;

var serviceUser;

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

service.saveUser = function ( user){

console.log("no serviço");
console.log(user);

  serviceUser = user;
  console.log(serviceUser);
}

 service.getUser = function (){
     console.log('No servico de get', serviceUser);
 return serviceUser;
}
}

})();
