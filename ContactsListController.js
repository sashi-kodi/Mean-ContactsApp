angular.module('contactsApp').controller('ContactsListController', function($scope,ContactsFactory, $state){
    ContactsFactory.getAllContacts()
    .then(
    function(res){
        $scope.contactslist= res.data;
        
    },
        function(data,status,header,config){
            $scope.contactslist = null;
            console.log("An error occured while retrieving contacts list from the server");
        }
    );
    
    $scope.update = function(index){
        var contact =$scope.contactslist[index];
        $state.go('getContacts.update',{name:contact.name, email:contact.email, phone:contact.phone});
    }
});