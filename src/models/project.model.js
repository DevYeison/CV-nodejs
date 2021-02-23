'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const ProjectSchema = Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        description: {
            type: String
        },
        finishDate:{
            type: Date,
            required: true
        },
        technologies:[
           {
            type: String
           }
        ],
        320:[
            { 
                type: String,
                unique: true
            }
        ],
        375:[
            { 
                type: String,
                unique: true
            }
        ],
        425:[
            { 
                type: String,
                unique: true
            }
        ],
        768:[
            { 
                type: String,
                unique: true
            }
        ],
        1024:[
            { 
                type: String,
                unique: true
            }
        ],
        1440:[
            { 
                type: String,
                unique: true
            }
        ],
        2560:[
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