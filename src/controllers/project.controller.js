'use strict'

 const _projectService = require('../services/project.service');
    
    const get = async (req,res)=>{
        const { projectId, resolution} = req.params;
        return await _projectService.get(projectId, resolution, res);    
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