gmailApp.controller('starController', [
  '$scope',
  'starData',
  'stardraftData',
  'staroutboxData',
  'starinboxData',
  function($scope,starData,stardraftData,staroutboxData,starinboxData){
    $scope.items=[];
    for(i=0;i<stardraftData.drafts.length;i++){
      if(stardraftData.drafts[i].starred){
        $scope.items.push(stardraftData.drafts[i]);;
        console.log($scope.items);
      }
    }
}]);
