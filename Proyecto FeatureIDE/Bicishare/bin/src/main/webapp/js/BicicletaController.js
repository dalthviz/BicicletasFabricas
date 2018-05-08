'use strict';

module.controller('BicicletaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    // listar
    $scope.lista = [];
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $http.get('./webresources/Bicicleta', {})
            .success(function (data, status, headers, config) {
                $scope.lista = data;
            }).error(function (data, status, headers, config) {
                alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });    
    };

        $scope.listarPrestamos=function(){
            $http.get('./webresources/Prestamo', {})
                .success(function (data, status, headers, config) {
                    $scope.listaPrestamos = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de prestamos, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarPrestamos();
            $scope.listarProveedor=function(){
            $http.get('./webresources/Proveedor', {})
                .success(function (data, status, headers, config) {
                    $scope.listaProveedor = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de proveedor, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarProveedor();
            $scope.listarMarca=function(){
            $http.get('./webresources/Marca', {})
                .success(function (data, status, headers, config) {
                    $scope.listaMarca = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de marca, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarMarca();
        

    $scope.listar();
    // guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        $http.post('./webresources/Bicicleta', JSON.stringify($scope.datosFormulario), {}
            ).success(function (data, status, headers, config) {
                alert("Los datos han sido guardados con Exito");
                $scope.panelEditar = false;
                $scope.listar();
            }).error(function (data, status, headers, config) {
                alert('Error al guardar la informaci\xf3n, por favor intente m\xe1s tarde');
            });
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    // editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    // eliminar
    $scope.eliminar = function (data){
        if (confirm('\xbfDesea elminar este registro?')) {    
            $http.delete('./webresources/Bicicleta/'+data.id, {})
                .success(function (data, status, headers, config) {
                    $scope.listar();
                }).error(function (data, status, headers, config) {    
                    alert('Error al eliminar la informaci\xf3n de Bicicleta, por favor intente m\xe1s tarde');
            });   
        }
    };
}]);
