namespace IndiProject {

    angular.module('IndiProject', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: IndiProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: IndiProject.Controllers.HomeController,
                controllerAs: 'controller'
            })

            .state('albums', {
                url: '/albums',
                templateUrl: '/ngApp/views/albums.html',
                controller: IndiProject.Controllers.AlbumsController,
                controllerAs: 'controller'
            })

            .state('artists', {
                url: '/artists',
                templateUrl: '/ngApp/views/artists.html',
                controller: IndiProject.Controllers.HomeController,
                controllerAs: 'controller'
            })

            .state('addArtist', {
                url: '/addArtist',
                templateUrl: '/ngApp/views/addArtist.html',
                controller: IndiProject.Controllers.addArtistController,
                controllerAs: 'controller'
            })

            .state('addAlbum', {
                url: '/addAlbum/:id',
                templateUrl: '/ngApp/views/addAlbum.html',
                controller: IndiProject.Controllers.addAlbumToArtistController,
                controllerAs: 'controller'
            })

            .state('delete', {
                url: '/deleteAlbum/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: IndiProject.Controllers.deleteAlbumController,
                controllerAs: 'controller'
            })


            .state('deleteArtist', {
                url: '/deleteArtist/:id',
                templateUrl: '/ngApp/views/deleteArtist.html',
                controller: IndiProject.Controllers.deleteArtistController,
                controllerAs: 'controller'
            })

            .state('editArtist', {
                url: '/editArtist/:id',
                templateUrl: '/ngApp/views/editArtist.html',
                controller: IndiProject.Controllers.editArtistController,
                controllerAs: 'controller'
            })

            .state('editAlbum', {
                url: '/editAlbum/:id',
                templateUrl: '/ngApp/views/editAlbum.html',
                controller: IndiProject.Controllers.editAlbumController,
                controllerAs: 'controller'
            })

            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
