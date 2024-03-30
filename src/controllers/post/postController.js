const createService = require('../../services/common/CreateService');
const listService = require('../../services/common/ListService');
const deleteService = require('../../services/common/DeleteService');
const updateService = require('../../services/common/UpdateService');
const {postDetailService,commentByPost} = require('../../services/post/postService')


const dataModel = require('../../models/post/postModel');

exports.createPost= async (req, res)=>{
    let Result = await createService(req, dataModel);
    res.status(200).json(Result);
}

exports.readPost= async (req, res)=>{
    let Result = await listService(req, dataModel);
    res.status(200).json(Result);
}

exports.deletePost= async (req, res)=>{
    let Result = await deleteService(req, dataModel);
    res.status(200).json(Result);
}

exports.updatePost= async (req, res)=>{
    let Result = await updateService(req, dataModel);
    res.status(200).json(Result);
}

exports.postDetail= async (req, res)=>{
    let Result = await postDetailService(req);
    res.status(200).json(Result);
}

exports.commentByPost = async (req,res)=>{
    let Result = await commentByPost(req);
    res.status(200).json(Result)
}



exports.totalPost= async (req, res)=>{
    let Result = await dataModel.countDocuments();
    res.status(200).json({status:"success",data:Result});
}