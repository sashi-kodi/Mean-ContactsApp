angular.module('contactsApp').controller('AddContactController', function($scope,ContactsFactory){
   function printDetails(obj){
       var text="";
       for(key in obj){
           text+= key + " : " +obj[key] +' , ';
       }
       text= text.slice(0,text.length-1);
       return text;
   }
    $scope.message="";
    $scope.addContact = function(){
        ContactsFactory.addContact($scope.contact)
        .then(function(res){
            console.log(res.data);
            var text = res.data.message;
            
            $scope.message=text;
            
            
        }, function(data,status,headers,config){
            $scope.contact = null;
            console.log("An Error occured while trying to fetch");
        });
    };
    
});