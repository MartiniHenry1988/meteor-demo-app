app.config(function($stateProvider) {
  
  $stateProvider.state('home', {

		url:          '/',
		templateUrl:  'client/www/public/views/home.html',
		controller:   'homeController'
	});
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise(function($injector, $location){

    $injector.get('$state').go('home');

  });
  $locationProvider.html5Mode(true);
});