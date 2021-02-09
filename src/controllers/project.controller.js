'use strict'

 const _projectService = require('../services/project.service');
    

    const get = async (req,res)=>{
        const { projectId } = req.params;
        const project = await _projectService.get(projectId);
        return res.send(project);
    }

    const getAll= async(req,res)=>{
        const { pageSize, pageNum } = req.query;
        const projects = await _projectService.getAll(pageSize, pageNum);
        return res.send(projects);
    }

   module.exports = {
        get,
        getAll
    } 