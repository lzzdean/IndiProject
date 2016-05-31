namespace IndiProject.Controllers {

    export class HomeController {
        private ArtistResource;
        public Artists;
        public getArtists() {
            this.Artists = this.ArtistResource.query();
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.ArtistResource = $resource('/api/artists/:id');
            this.getArtists();
        }
    }


    export class AlbumsController {
        private AlbumResource;
        public albums;

        public getAlbums() {
            this.albums = this.AlbumResource.query();
        }
        constructor(private $resource: angular.resource.IResourceService) {
            this.AlbumResource = $resource('/api/albums/:id');
            this.getAlbums();
        }
    }

    export class addArtistController {
        private ArtistResource;
        public artist;

        public addArtist() {
            return this.ArtistResource.save(this.artist)
                .$promise.then(() =>
                    this.$state.go('home')
                );
        }

        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.ArtistResource = $resource('/api/artists/:id');
        }

    }


    export class addAlbumToArtistController {
        private AlbumResource;
        public album;
        public artistId;

        public addAlbumToArtist() {
            this.album.artistId = this.artistId;
            return this.AlbumResource.save(this.album)
                .$promise.then(() =>
                    this.$state.go('home')
                );
        }

        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.AlbumResource = $resource('/api/albums/:id');
            this.artistId = $stateParams['id'];
        }
    }

    export class deleteAlbumController {
        private AlbumResource;
        public albumId;

        public deleteAlbum() {
            return this.AlbumResource.delete({ id: this.albumId })
                .$promise.then(() =>
                    this.$state.go('home')
                );
        }
        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.AlbumResource = $resource('/api/albums/:id');
            this.albumId = $stateParams['id'];
            this.deleteAlbum();
        }
    }

    export class deleteArtistController {
        private ArtistResource;
        public artistId;

        public deleteArtist() {
            return this.ArtistResource.delete({
                id: this.artistId
            }).$promise.then(() => this.$state.go('home')
                );
        }

        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.ArtistResource = $resource('/api/artists/:id');
            this.artistId = $stateParams['id'];

        }
    }


    export class editArtistController {
        private ArtistResource;
        public artists;
        public artist;
        public artistId;

        public editArtist() {
            
            return this.ArtistResource.save({ id: this.artistId }, this.artist)
                .$promise.then(() =>
                    this.$state.go('home')
                );
        }

        public getArtist() {
            this.artist = this.ArtistResource.get({ id: this.artistId });
          
        }

        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.ArtistResource = $resource('/api/artists/:id');
            this.artistId = $stateParams['id'];
            this.getArtist();
        }
    }

    export class editAlbumController {
        private AlbumResource;
        public albums;
        public album;
        public albumId;

        public editAlbum() {

            return this.AlbumResource.save({ id: this.albumId }, this.album)
                .$promise.then(() =>
                    this.$state.go('home')
                );
        

        }
        public getAlbum() {
            this.album = this.AlbumResource.get({ id: this.albumId });
        }
        constructor(private $resource: angular.resource.IResourceService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            this.AlbumResource = $resource('/api/albums/:id');
            this.albumId = $stateParams['id'];
            this.getAlbum();
        }
    }

}



