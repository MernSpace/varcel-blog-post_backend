const  mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
    description:{type:String},
    postID:{type:mongoose.Schema.Types.ObjectId},
    userEmail:{type:String},
    userName:{type:String},
    createdDate:{type:Date,default:Date.now()}
},{versionKey:false});
const commentModel=mongoose.model('comments',DataSchema);
module.exports=commentModel