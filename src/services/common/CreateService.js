const CreateService= async (Request,DataModel) => {
    try{

        let PostBody=Request.body;
        PostBody.adminEmail=Request.headers['email']

        let data = await DataModel.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=CreateService