var mongoose=require('mongoose');

var contactsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    phone:{type:String}
});

var ContactsModel = mongoose.model('Contacts', contactsSchema, 'ContactsList');
module.exports=ContactsModel;

//function ContactsModel(){
//    
//}
//ContactsModel.prototype.findAllRecords = function(callback){
//    contactsDBModel.find({},function(err,data){
//        
//        callback(data);
//    });
//};
//
//ContactsModel.prototype.getContact = function(inputemail,callback){
//    
//    contactsDBModel.findOne({email:inputemail}, function(err,data){
//        if (err) throw err;
//        else
//             if(!data) callback({message:'such a contact does not exist'});
//        
//        callback(data);
//    });
//    
//};
//
//ContactsModel.prototype.addContact = function(data,callback){
//    contactsDBModel.create(data,callback);
//};
//
//
//ContactsModel.prototype.deleteContact = function(eid,callback){
//    var query = {email:eid};
//    contactsDbModel.findOneAndRemove(query,callback);
//}
//   
//
//
//ContactsModel.prototype.updateContact = function(inputemail, data,callback){
//    contactsDBModel.findOne({email:inputemail}, function(err,result){
//        if (err) throw err;
//        if(!result) callback({message:"such a contact does not exist"});
//        else{
//            for(key in data){
//                result[key]= data[key];
//            }
//            
//            result.save(callback);
//        }
//        
//        
//    });
//}

