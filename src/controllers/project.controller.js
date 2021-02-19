'use strict'

 const _projectService = require('../services/project.service');
    
    const get = async (req,res)=>{
        const { projectId, resolution} = req.params;
        const project = await _projectService.get(projectId, resolution);
        return res.send(project);
    }

    const getAll= async(req,res)=>{
        const { resolution } = req.params;
        const { pageSize, pageNum } = req.query;
        return await _projectService.getAll(resolution, pageSize, pageNum, res);
    }

   module.exports = {
        get,
        getAll
    } 