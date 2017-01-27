(function(){
 var app= angular.module('contactsApp',['ui.router']);
    
   app.config(function($stateProvider, $urlRouterProvider){
       
       $urlRouterProvider.otherwise('/');
       
       $stateProvider
           
        .state('home', {
           url:'/',
           templateUrl:'Partials/home.html'
           
       })
       
           .state('getContacts', {
           url:'/contacts',
           templateUrl:'Partials/ContactsList.html',
           controller:'ContactsListController'
       })
        .state('getContacts.update', {
           params:{name:null, email:null, phone:null},
           templateUrl:'Partials/UpdateContact2.html',
           controller: 'UpdateContactController2'
         
       })
        .state('addContact', {
           url:'/addcontact',
           templateUrl:'Partials/addContact.html',
           controller:'AddContactController'
       })
       
       .state('updateContact', {
           
           url:'/updateContact',
           templateUrl:'Partials/updateContact.html',
           controller:'UpdateContactController'
           
       })
       .state('deleteContact', {
           url:'/deleteContact',
           templateUrl:'Partials/deleteContact.html',
           controller:'DeleteContactController'
       })
       
   });

    
    
    
})();