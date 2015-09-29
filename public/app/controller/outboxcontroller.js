gmailApp.controller('outboxController',[
  '$scope',
  'outboxData',function($scope,outboxData){
    $scope.outboxitems=outboxData.sentmails;

    $scope.setActive = function(outbox, outboxitems,index){

        if(outboxitems[index].starred){
        return outboxitems[index].starred= false;
        }
        else {
          return outboxitems[index].starred= true;
        }


        };


}]);
