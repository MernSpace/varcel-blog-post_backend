const createService = require('../../services/common/CreateService');
const listService = require('../../services/common/ListService');
const deleteService = require('../../services/common/DeleteService');
const updateService = require('../../services/common/UpdateService');
const DetailsByIDService = require("../../services/common/DetailsByIDService");

const dataModel = require('../../models/category/categoryModel');

exports.createCategory = async (req, res)=>{
    let Result = await createService(req,dataModel)
    res.status(200).json(Result)
}

exports.readCategory = async (req, res)=>{
    let Result = await listService(req,dataModel)
    res.status(200).json(Result)
}

exports.deleteCategory = async (req, res)=>{
    let Result = await deleteService(req,dataModel)
    res.status(200).json(Result)
}

exports.updateCategory = async (req, res)=>{
    let Result = await updateService(req,dataModel)
    res.status(200).json(Result)
}

exports.detailCategory = async (req, res)=>{
    let Result = await DetailsByIDService(req,dataModel)
    res.status(200).json(Result)
}