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
    $scope.$on('refresh',function(event,data){
        console.log('received refresh event');
        var email =data.email;
        event.preventDefault();
       for(var i=0;i<$scope.contactslist.length;i++){
           if(email === $scope.contactslist[i].email){
               $scope.contactslist[i].name = data.name;
               $scope.contactslist[i].phone = data.phone;
           }
       }
        
    });
});