angular.module('contactsApp').factory('ContactsFactory', function($http){
    var factory={};
    factory.getAllContacts= function(){
        return $http.get('/api/contacts');
    }
    
    factory.getContact = function(inputemail){
        return $http.get('/api/contacts/'+ inputemail);
        
    };
    
    factory.updateContact = function(data){
        var email = data.email;
        return $http.put('/api/contacts/'+email,data);
    }
    
    factory.addContact = function(data){
        return $http.post('/api/contacts',data);
    }
    factory.deleteContact = function(emailid){
        
        return $http.delete('/api/contacts/'+ emailid);
        
    }
    return factory;
});