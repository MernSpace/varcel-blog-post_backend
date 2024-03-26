const express =require('express');
const AuthVerifyMiddleware=require("../middlewares/AuthVerifyMiddleware");
const UsersController=require("../controllers/Users/UsersController");
const adminController = require('../controllers/admin/adminController');
const categoryController = require('../controllers/category/categoryController')



const router =express.Router();


//Admin Profile
router.post("/Admin-Registration",adminController.adminRegistration);
router.post("/Admin-Login",adminController.adminLogin);
router.post("/Admin-ProfileUpdate",AuthVerifyMiddleware,adminController.adminProfileUpdate);
router.get("/Admin-ProfileDetails",AuthVerifyMiddleware,adminController.adminProfileDetails);
router.get("/Admin-RecoverVerifyEmail/:email",adminController.adminRecoverVerifyEmail);
router.get("/Admin-RecoverVerifyOTP/:email/:otp",adminController.adminRecoverVerifyOTP);
router.post("/Admin-RecoverResetPass",adminController.adminRecoverResetPass);



// User Profile
router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);


//category


router.post('/create-category',AuthVerifyMiddleware,categoryController.createCategory);
router.get('/list-category',categoryController.readCategory);
router.post('/update-category/:id',AuthVerifyMiddleware,categoryController.updateCategory);
router.get('/delete-category/:id',AuthVerifyMiddleware,categoryController.deleteCategory);
router.get('/category-detail/:id',categoryController.detailCategory);


module.exports=router;






































module.exports=router;