angular.module('starter.services',[])

.factory('Brewery', function($http) {
        return {

            get: function() {
                return $http.get('http://ec2-54-83-34-233.compute-1.amazonaws.com/mobileCraftBeer/public/api/v1/breweries');
            },

        // search: function(searchData) {
        //     console.log('search', searchData);
        //     return $http({
        //         method: 'POST',
        //         url: 'http://ec2-54-83-34-233.compute-1.amazonaws.com/mobileCraftBeer/public/api/v1/search',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         data: $.param(searchData)
        //     });
        // },

        // show: function(id) {
        //     return $http.get('http://ec2-54-83-34-233.compute-1.amazonaws.com/mobileCraftBeer/public/api/v1/breweries/' + id);
        // },
        // showBeers: function(id) {
        //     return $http.get('http://ec2-54-83-34-233.compute-1.amazonaws.com/mobileCraftBeer/public/api/v1/breweries/' + id + '/beers');
        // },
        // showStyles: function(id) {
        //     return $http.get('http://ec2-54-83-34-233.compute-1.amazonaws.com/mobileCraftBeer/public/api/v1/breweries/' + id + '/styles');
        // }
        }
    });