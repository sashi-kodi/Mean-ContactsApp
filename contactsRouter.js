var express= require('express');
var router= express.Router();
var ContactsModel = require('../Models/ContactsModel');


router.get('/', function(req,res,next){
    ContactsModel.find({},function(err,contactsdata){
        if (err) {
            console.log("error occured at server while trying to fetch contact records");
            res.send(err);
        }
        else{
            res.json(contactsdata);
        }
        
    });
    
        
});

router.post('/',function(req,res,next){
   ContactsModel.create(req.body,function(err,data){
       
       if(err) {
           res.send(err);
           console.log("error occured at server while trying to post a contact record");
       }
       else{
           res.json({message:'New contact detail has been successfully added'})
       }
       
   });
});

router.get('/:emailid', function(req,res,next){
   ContactsModel.findOne({email:req.params.emailid}, function(err,data){
       
    if (err){
        console.log("an error occured while trying to read the Contact record from database");
        res.send(err);
    }
       else{
           if(!data) {
               res.json({message:"Such a contact does not exist in the database"});
           }
           else{
               res.json(data);
           }
       }
       
   });
});

router.put('/:emailid',function(req,res,next){
    
    var newdata = req.body;
    
 ContactsModel.findOne({email:req.params.emailid},function(err,contact){
     if (err) {
         console.log("An error occured while trying to fetch contact details from database");
         res.send(err);
     }
     else{
         if(!contact){
             console.log("such a contact does not exists");
           res.json({message:"Such a contact does not exist"});  
         }
         else{
             for(key in newdata)
                 contact[key]=newdata[key];
             
             console.log("new contact : "+ contact);
             contact.save(function(err,newcontact){
                 res.json({message: "Contact updated successfully"});
             });
             
         }
     }
 });
 });   


router.delete('/:emailid', function(req,res,next){
    
    ContactsModel.findOne({email:req.params.emailid}, function(err,contact){
        
        if(err) res.send("An error occured while trying to fetch the contact record");
        else{
            if(!contact) res.json({message:"such a contact does not exist"});
            else{
                contact.remove(function(err,data){
                    res.json({message:"Contact has been removed successfully"});
                });
            }
        }
        
        
    });
   
});

module.exports=router;