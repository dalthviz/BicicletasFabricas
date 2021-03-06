'use strict';

module.controller('BicicletaCtrl', ['$scope', '$filter', '$http', '$window', function ($scope, $filter, $http, $window) {
    
    // listar
    $scope.lista = [];
    $scope.datosFormulario = {};
    
    $scope.listar=function(){
        $http.get('./webresources/Bicicleta', {})
            .success(function (data, status, headers, config) {
                $scope.lista = data;
            }).error(function (data, status, headers, config) {
                alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });    
    };
    
    $scope.listar();
        
    $scope.addToCartB = function (bicicleta) {
        console.log(bicicleta);
      var carrito = localStorage.getItem("carrito");
      carrito = carrito ? JSON.parse(carrito) : [];
      bicicleta.cantidad = 0;
      bicicleta.tipo = 'bici';
      var existe = carrito.filter(function(current, index, array) {
        if(bicicleta.tipo == 'bici')
        	return current.id === bicicleta.id;
      })[0];
      if(existe) {
        existe.cantidad++;
      } else {
        bicicleta.cantidad++;
        carrito.push(bicicleta);
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    
    $scope.seleccionar = function (data) {
        addToCart(data);  
    };
}]);
