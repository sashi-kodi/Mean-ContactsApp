angular.module('contactsApp').controller('UpdateContactController2', function($scope,ContactsFactory,$stateParams){
        
    $scope.message="";
    $scope.contact={};
    console.log($stateParams.name, $stateParams.email, $stateParams.phone);
    $scope.contact.name = $stateParams.name;
    $scope.contact.email = $stateParams.email;
    $scope.contact.phone = $stateParams.phone;
    

    
    $scope.updateContact = function(){
        ContactsFactory.updateContact($scope.contact)
        .then(function(res){
            $scope.message = res.data.message;
        }, 
        function(data,status,headers,config){
            $scope.message ="An Error occured at the Server while trying to update";
           
        });
        
    };
   
   
    
});