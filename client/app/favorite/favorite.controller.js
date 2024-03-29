'use strict';

angular.module('liveTtApp')
  .controller('FavoriteCtrl', function ($scope, $http, socket, $match, $stateParams, $mdDialog, $mdToast, $mdSidenav, $mdUtil, $log, $location, Auth) {
  	
  	/** Check if the user is auth */
  	if(!Auth.getCurrentUser()._id) {
  		$location.path('/');
  	}

	$match.followedMatch(Auth.getCurrentUser()._id).then(function(res) {
		$scope.matchs = res.data;
	});

  	$scope.unFollowMatch = function(matchId) {
      $match.unFollowMatch(matchId, Auth.getCurrentUser()._id).then(function(res){
        $mdToast.show($mdToast.simple().content('Match correctement supprimé de vos favoris').theme('success-toast'));
      });
	} 

  });
