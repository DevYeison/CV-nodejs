const _projectModel = require('../models/project.model');

 const get = async (id, resolution)=>{
        if(!id){
            const error = new Error();
            error.status = 400;
            error.message = "id must be sent";
            throw error;
        }
        if(!resolution){
            const error = new Error();
            error.status = 400;
            error.message = "resolution must be sent";
            throw error;
        }
        
        const currentProject = await _projectModel.findById(id, `_id name description imgs_${resolution} finishDate technologies`);

        if(!currentProject){
            const error = new Error();
            error.status = 404;
            error.message = "project not found";
            throw error;
        }

        return currentProject;
    }

 const getAll = async (resolution = 0, pageSize = 5, pageNum = 1, res)=>{

        if(!resolution){
            const error = new Error();
            error.status = 400;
            error.message = "resolution must be sent";
            throw error;
        }

        const skips = pageSize * (pageNum - 1);

        let query = _projectModel
        .find({}, `_id name description ${resolution} finishDate technologies`)
        .skip(skips)
        .limit(pageSize);
        
        query.exec(function (err, oldProject){
            let newProjects = [];
            let newProject = new Object;
            
            if(err){
                return;
            }
            
            JSON.stringify(oldProject);
            for(let i= 0; i < oldProject.length; i++){
                newProject['_id'] = oldProject[i]._id;
                newProject['name'] = oldProject[i].name;
                newProject['description'] = oldProject[i].description;
                newProject['finishDate'] = oldProject[i].finishDate;
                newProject['technologies'] = oldProject[i].technologies;
                newProject['imgs'] = oldProject[i][resolution];
                newProjects.push(newProject);
            }

            return res.send(newProjects);
        });
    }   

module.exports = {
    get,
    getAll
}