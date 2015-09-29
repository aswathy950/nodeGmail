gmailApp.service('Mailsrv', function($http, $q) {

  var service={};

  service.fetchInbox= function(){

    var deferred = $q.defer();
    $http.get('assets/json/mails.json')

    .success(function(data) {
       deferred.resolve(data);
    })

    .error(function(){
       deferred.reject();
    });

    return deferred.promise;
 }
 service.fetchSent= function(){

   var deferred = $q.defer();
   $http.get('assets/json/sentmails.json')

   .success(function(data) {
      deferred.resolve(data);
   })

   .error(function(){
      deferred.reject();
   });

   return deferred.promise;
 }

 service.fetchDraft= function(){

   var deferred = $q.defer();
   $http.get('assets/json/drafts.json')

   .success(function(data) {
     localStorage.setItem("name",JSON.stringify(data));
      deferred.resolve(data);
   })

   .error(function(){
      deferred.reject();
   });

   return deferred.promise;
 }
 service.fetchStar= function(){

   var deferred = $q.defer();
   $http.get('assets/json/star.json')

   .success(function(data) {
      deferred.resolve(data);
   })

   .error(function(){
      deferred.reject();
   });

   return deferred.promise;
 }

  return service;
});
