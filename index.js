var express = require('express');
var router = express.Router();
router.use('/api/contacts',require('./contactsRouter'));
module.exports=router;