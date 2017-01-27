angular.module('contactsApp').controller('UpdateContactController', function($scope,ContactsFactory){
        
    
    $scope.email="";
    $scope.contact=null;
    $scope.message="";

    
    $scope.updateContact = function(){
        ContactsFactory.updateContact($scope.contact)
        .then(function(res){
            $scope.message = res.data.message;
        }, 
        function(data,status,headers,config){
            $scope.message ="An Error occured at the Server while trying to update";
            $scope.email="";
        });
        
    };
   
    $scope.getContact = function(){
        ContactsFactory.getContact($scope.email)
        .then(function(res){
            $scope.contact = res.data;
            
            
        }, function(data,status,headers,config){
            $scope.contact = null;
            console.log("An Error occured while trying to fetch");
        });
    };
    
});