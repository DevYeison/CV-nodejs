const _projectModel = require('../models/project.model');

 const get = async (id, resolution, res)=>{
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
        
        let currentProject = _projectModel.findById(id, `_id name description ${resolution} finishDate technologies`);
        
        currentProject.exec(function (err, oldProject){
            let newProject = new Object;
            
            if(err){
                return;
            }
            
            JSON.stringify(oldProject);
            newProject['_id'] = oldProject._id;
            newProject['name'] = oldProject.name;
            newProject['description'] = oldProject.description;
            newProject['finishDate'] = oldProject.finishDate;
            newProject['technologies'] = oldProject.technologies;
            newProject['imgs'] = oldProject[resolution];
            return res.send(newProject);
        });
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
        
        query.exec(function (err, oldProjects){
            let newProjects = [];
            let newProject = new Object;
            
            if(err){
                return;
            }
            oldProjects.map(function (project){
                newProject['_id'] = project._id;
                newProject['name'] = project.name;
                newProject['description'] = project.description;
                newProject['finishDate'] = project.finishDate;
                newProject['technologies'] = project.technologies;
                newProject['imgs'] = project[resolution];
                newProjects.push(newProject);
                newProject = {};
            });
            return res.send(newProjects);
        });
    }   

module.exports = {
    get,
    getAll
}