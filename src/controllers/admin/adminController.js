const DataModel = require("../../models/admin/adminModel");
const AdminCreateService = require("../../services/user/UserCreateService");
const AdminLoginService = require("../../services/admin/admiLoginService");
const AdminUpdateService = require("../../services/user/UserUpdateService");
const AdminDetailsService = require("../../services/user/UserDetailsService");
const AdminResetPassService = require("../../services/user/UserResetPassService");
const AdminVerifyOtpService = require("../../services/user/UserVerifyOtpService");
const AdminVerifyEmailService = require("../../services/user/UserVerifyEmailService");
const OTPSModel = require("../../models/Users/OTPSModel");


exports.adminRegistration=async (req, res) => {
    let Result=await AdminCreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.adminLogin=async(req,res)=>{
    let Result=await AdminLoginService(req,DataModel)
    if(Result['status']==="success"){

        // Cookies Option
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}

        // Set Cookies With Response
        res.cookie('token',Result['token'],cookieOption)
        return res.status(200).json(Result)

    }else {
        return res.status(200).json(Result)
    }
}


exports.adminLogout = async (req, res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}


exports.adminProfileUpdate=async (req, res) => {
    let Result=await AdminUpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.adminProfileDetails=async (req, res) => {
    let Result=await AdminDetailsService(req,DataModel)
    res.status(200).json(Result)
}


exports.adminRecoverVerifyEmail=async (req,res)=>{
    let Result=await AdminVerifyEmailService(req,DataModel)
    res.status(200).json(Result)
}


exports.adminRecoverVerifyOTP=async (req,res)=>{
    let Result=await AdminVerifyOtpService(req,OTPSModel)
    res.status(200).json(Result)
}

exports.adminRecoverResetPass=async (req,res)=>{
    let Result=await AdminResetPassService(req,DataModel)
    res.status(200).json(Result)
}














