const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    email:{type:String,unique:true},
    name:{type:String},
    mobile:{type:String},
    password:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const adminModel=mongoose.model('admins',DataSchema);
module.exports=adminModel