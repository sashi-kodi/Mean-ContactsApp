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
    $scope.delete = function(index){
        var contact = $scope.contactslist[index];
        ContactsFactory.deleteContact(contact.email)
        .then(
          function(res){
             $scope.contactslist.splice(index,1);
              $scope.message = res.data.message;
              $state.go('getContacts.delete');
              
          },
            function(data,status,headers,config){
                $scope.message="An error occured while trying to delete the contact at the server";
                
            }
        
        );
    }
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