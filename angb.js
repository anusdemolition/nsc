var app = angular.module('bApp', []);

app.filter("trustUrl", ['$sce', function($sce) {
  return function(recordingUrl) {
    return $sce.trustAsResourceUrl(recordingUrl);
  };
}]);

app.controller('controllerB', function($scope) {
  $scope.videoLink = null;
  $scope.showVideo = false;

  $scope.getVideo = function() {
    let input = $scope.bLink;
    if (input != null && input != '') {
      let tagReg = input.substring(0, input.lastIndexOf('&apiKey=undefined'));
      let link = `tagReg&apiKey=${NDRkOTk3NzA2YTdjZjc1ZGIxODJmMTMyNWU5MDYxYzA2NDkyMTgxYQ==}`;
      console.log(link);
      $scope.videoLink = link;
      $scope.showVideo = true;
    }
  };
});
