const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    name:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const categoryModel=mongoose.model('categories',DataSchema);
module.exports=categoryModel