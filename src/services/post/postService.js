
const dataModel = require('../../models/post/postModel')
const commentDataModel = require('../../models/comment/commentModel')
const mongoose = require("mongoose");


const postDetailService = async (req)=>{
    try{
        let postID = req.params.id

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject={};
        QueryObject['_id']=ObjectId(postID);

        let joinCategory = {$lookup:{from:'categories',localField:"categoryID",foreignField:"_id",as: "category"}}
        let joinComment = {$lookup:{from:'comments',localField:"_id",foreignField:"postID",as: "comments"}}


        let UnwindCategoryStage={$unwind:"$category"}
        let UnwindCommentStage={$unwind:"$comments"}
        

        let data = await dataModel.aggregate([
            {$match: QueryObject},
            joinCategory,
            joinComment,
            UnwindCommentStage,
            UnwindCategoryStage,

        ])
        return {status: "success", data: data}



    }catch (e) {
        return {status: "fail", data: e}
    }

}



const commentByPost = async (req)=>{
    try{
        let postID = req.params.postID
        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject={};
        QueryObject['postID']=ObjectId(postID);
        let data = commentDataModel.find(QueryObject)
        return {status: "success", data: data}
    }
    catch (e) {
        return {status: "fail", data: e}
    }
}


module.exports= {postDetailService,commentByPost}
