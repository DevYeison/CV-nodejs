 'use strict'
const path = require('path');

const get = async (req,res)=>{
    return res.sendFile(path.resolve('public', 'index.html'));
}

module.exports = {
    get
}