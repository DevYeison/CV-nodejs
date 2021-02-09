'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const ProjectSchema = Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String
        },
        finishDate:{
            type: Date,
            required: true
        },
        images: [
            { 
                type: String,
                unique: true
            }
            ]
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);

ProjectSchema.plugin(uniqueValidator);

module.exports = mongoose.model('project', ProjectSchema);