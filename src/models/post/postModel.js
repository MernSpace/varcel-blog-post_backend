const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    title:{type:String},
    image:{type:String},
    description:{type:String},
    categoryID:{type:mongoose.Schema.Types.ObjectId},
    adminEmail:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const postModel=mongoose.model('posts',DataSchema);
module.exports=postModel