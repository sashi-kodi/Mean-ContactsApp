angular.module('contactsApp').controller('DeleteContactController', function($scope,ContactsFactory){
    $scope.email="";
    $scope.message="";
  
   
    $scope.deleteContact = function(){
        ContactsFactory.deleteContact($scope.email)
        .then(
          function(res){
             $scope.message = res.data.message;
              $scope.email="";
              
          },
            function(data,status,headers,config){
                $scope.message="An error occured while trying to delete the contact at the server";
                $scope.email="";
            }
        
        );
        
    };
    
    
    
});