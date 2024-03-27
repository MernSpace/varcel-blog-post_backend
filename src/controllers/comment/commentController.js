const createService = require('../../services/common/CreateService');
const listService = require('../../services/common/ListService');
const deleteService = require('../../services/common/DeleteService');
const updateService = require('../../services/common/UpdateService');
const DetailsByIDService = require("../../services/common/DetailsByIDService");


const dataModel = require('../../models/comment/commentModel');



exports.createComment= async (req, res)=>{
    let Result = await createService(req, dataModel);
    res.status(200).json(Result)
}



exports.readComment= async (req, res)=>{
    let Result = await listService(req, dataModel);
    res.status(200).json(Result)
}



exports.deleteComment= async (req, res)=>{
    let Result = await deleteService(req, dataModel);
    res.status(200).json(Result)
}


exports.updateComment= async (req, res)=>{
    let Result = await updateService(req, dataModel);
    res.status(200).json(Result)
}



exports.commentDetail= async (req, res)=>{
    let Result = await DetailsByIDService(req, dataModel);
    res.status(200).json(Result)
}