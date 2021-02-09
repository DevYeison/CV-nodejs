const _projectModel = require('../models/project.model');

 const get = async (id)=>{
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }
        
        const currentProject = await _projectModel.findById(id);

        if(!currentProject){
            const error = new Error();
            error.status = 404;
            error.message = "project not found";
            throw error;
        }

        return currentProject;
    }

 const getAll = async (pageSize = 5, pageNum = 1)=>{
        const skips = pageSize * (pageNum - 1);
        return await _projectModel
            .find()
            .skip(skips)
            .limit(pageSize);
    }

module.exports = {
    get,
    getAll
}