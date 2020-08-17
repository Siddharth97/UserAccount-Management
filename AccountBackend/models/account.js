const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const AccountSchema = new Schema({
    customerlist: 
    {
    // accountId: {type:String, trim:true, default:''},
    // accountName: {type:String, trim:true, default:''},
    // accountNumber: {type:String, trim:true, default:''},
    // initialBalance: {type:String, trim:true, default:''},
    // currentBalance: {type:String, trim:true, default:''},
    // currencyType: {type:String, trim:true, default:''},
    // accountType: {type:String, trim:true, default:''},
    // transactionHistory: {type:String, trim:true, default:''}
    }
});

const Account = mongoose.model('Accounts', AccountSchema, 'customerlist');

module.exports = Account;

