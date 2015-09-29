gmailApp.controller('inboxController',[
  '$scope',
  'inboxData',function($scope,inboxData){
    $scope.inboxitems=inboxData.received;
    console.log(inboxData);
    $scope.setActive = function(inbox, inboxitems,index){

        if(inboxitems[index].starred){
        return inboxitems[index].starred= false;
        }
        else {
          return inboxitems[index].starred= true;
        }


        };


}]);
