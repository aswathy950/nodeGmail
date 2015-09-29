gmailApp.controller('draftController',[
  '$scope',
  'draftData',function($scope,draftData){

    $scope.draftitems = JSON.parse(localStorage.getItem("name"));
    $scope.setActive = function(draft, draftitems,index){

        if(draftitems.drafts[index].starred){
        draftitems.drafts[index].starred= false;
        }
        else {
        draftitems.drafts[index].starred= true;
        }
        //localStorage.setItem("name",JSON.stringify(draftitems));
        };
}]);
