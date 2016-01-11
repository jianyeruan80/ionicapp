angular.module('starter.controllers', ['ion-sticky'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$ionicScrollDelegate,$timeout,$ionicSlideBoxDelegate) {
  
  
  $scope.selectIndex=0;
  
  $scope.slideHasChanged=function(index){
   $scope.selectIndex=index;
   var element=document.getElementById("span"+index);
   var start=element.offsetLeft;
   var end=element.offsetWidth;
   var selfWidth=document.getElementById("span"+index).clientWidth;
   var contentWidth=document.documentElement.clientWidth;
   
   if(start==0){
     $ionicScrollDelegate.scrollTo(0, 0, true);
   }else {
    $ionicScrollDelegate.scrollTo(start-end, 0, true);
   }/*else if(start>=contentWidth){
    $ionicScrollDelegate.scrollTo(contentWidth, 0, true);
   }else if(start>=(contentWidth/2)){
    $ionicScrollDelegate.scrollTo(contentWidth/2, 0, true);
   }*/
   
  
  }
  $scope.goTab=function(index){
    $timeout(function() {
            $ionicSlideBoxDelegate.slide(index);
          }, 0);
  }


$scope.items = [{
    from: 'Ben',
    face: 'https://pbs.twimg.com/profile_images/378800000571933189/278e8e1b7871a115b95fc550cd07af40.png',
    text: 'Whoa, whoa, whoa. There¡¯s still plenty of meat on that bone. Now you take this home, throw it in a pot, add some broth, a potato. Baby, you\'ve got a stew going.'
  }, {
    from: 'Adam',
    face: 'https://pbs.twimg.com/profile_images/2927292174/25b170ee2e3044fd936ad1319bc4b82d_bigger.jpeg',
    text: 'It Ain\'t Easy Being Cheesy'
  }, {
    from: 'Tim',
    face: 'https://pbs.twimg.com/profile_images/378800000290028838/ee3303b02223f25cb0f9b082b55b2eeb.jpeg',
    text: 'Baxter! You know I don\'t speak spanish!'
  }, {
    from: 'Brody',
    face: 'https://pbs.twimg.com/profile_images/378800000138067018/554c103ebf37c2ba3b923b8deea46b0d.jpeg',
    text: 'Sounds like some sort of marmalade'
  }, {
    from: 'Peter',
    face: 'https://pbs.twimg.com/profile_images/378800000238071493/08f76337bdc91b1e1e73a9d55c57a451.jpeg',
    text: 'A cooked goose for everyone!'
  }, {
    from: 'Max',
    face: 'https://pbs.twimg.com/profile_images/430001754747305984/qa5DFLgU.jpeg',
    text: 'Yes my dear man, more beans. oooohh'
  }, {
    from: 'Andy',
    face: 'https://pbs.twimg.com/profile_images/423294834229522433/BSlEOBYt.jpeg',
    text: 'I did it all for her'
  }, {
    from: 'Melissa',
    face: 'https://pbs.twimg.com/profile_images/412451928816111616/VZ3_md1N.jpeg',
    text: 'I think I want my money back'
  }];



  $scope.playlists = [
      { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 7},
    { title: 'Cowbell', id: 8 },
    { title: 'Cowbell', id: 9 },
    { title: 'Cowbell', id: 10 },
    { title: 'Cowbell', id: 11 },
    { title: 'Cowbell', id: 12 },
     { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Cowbell', id: 7},
    { title: 'Cowbell', id: 8 },
    { title: 'Cowbell', id: 9 },
    { title: 'Cowbell', id: 10 },
    { title: 'Cowbell', id: 11 },
    { title: 'Cowbell', id: 12 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
