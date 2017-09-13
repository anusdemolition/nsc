var app = angular.module('nsApp', []);

app.filter("trustUrl", ['$sce', function($sce) {
  return function(recordingUrl) {
    return $sce.trustAsResourceUrl(recordingUrl);
  };
}]);

app.controller('controllerIndex', function($scope) {
  $scope.videoLink = null;
  $scope.showVideo = false;

  $scope.getVideo = function() {
    let input = $scope.photoLink;
    if (input != null && input != '') {
      let tagReg = input.substring(input.lastIndexOf('/upload/') + 8, input.lastIndexOf('//thumbs'));
      let tagLower = tagReg.toLowerCase()
      tagLower = tagLower.substring(3, tagLower.length);
      let link = `https://z8g6j3r3.ssl.hwcdn.net/members/content/upload/${tagReg}/MP4720HD/${tagLower}.mp4`;
      console.log(link);
      $scope.videoLink = link;
      $scope.showVideo = true;
    }
  };
});

app.controller('controllerB', function($scope) {
  $scope.videoLink = null;
  $scope.showVideo = false;

  $scope.getVideo = function() {
    let input = $scope.bLink;
    if (input != null && input != '') {
      let tagReg = input.substring(0, input.lastIndexOf('&apiKey=undefined'));
      let link = `${tagReg}&apiKey=NDRkOTk3NzA2YTdjZjc1ZGIxODJmMTMyNWU5MDYxYzA2NDkyMTgxYQ==`;
      console.log(link);
      $scope.videoLink = link;
      $scope.showVideo = true;
    }
  };
});
