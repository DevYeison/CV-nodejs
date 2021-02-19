const mongoose = require('mongoose');
const { MONGO_URI } = require("../config")
const ProjectModel = require('../models/project.model')

mongoose.connect(MONGO_URI, { useNewUrlParser: true});

const projects = [
    {
        name: "Red Martini",
        description: "Aplicación creada para el manejo de pedidos y distribución de licores de la licorera Red Martini",
        finishDate: "2020-12-26T00:00:00.000+00:00",
        technologies:[
            "Dart",
            "Flutter",
            "NodeJS",
            "Express",
            "MongoDB",
            "Javascript",
            "HTML",
            "CSS"
        ],
        320:[
            "https://i.ibb.co/d6f7JPY/320w.jpg",
            "https://i.ibb.co/ZzT6CbN/320w.jpg",
            "https://i.ibb.co/Xk0YyG3/320w.jpg"
        ],
        375:[
            "https://i.ibb.co/R96QHBF/1.jpg",
            "https://i.ibb.co/y4dH9kM/2.jpg",
            "https://i.ibb.co/WGfQhJM/3.jpg"
        ],
        425:[
            "https://i.ibb.co/fxNF1sR/1.jpg",
            "https://i.ibb.co/ThpX6q4/2.jpg",
            "https://i.ibb.co/zZbshPC/3.jpg"
        ],
        768:[
            "https://i.ibb.co/RTkdcn3/1.jpg",
            "https://i.ibb.co/2dmFRWJ/2.jpg",
            "https://i.ibb.co/KxvgP0m/3.jpg"
        ],
        1024:[
            "https://i.ibb.co/3dGvxbb/1.jpg",
            "https://i.ibb.co/BZzSWbF/2.jpg",
            "https://i.ibb.co/hcmmyd2/3.jpg"
        ],
        1440:[
            "https://i.ibb.co/pdtnRFN/1.jpg",
            "https://i.ibb.co/w4sLjMQ/2.jpg",
            "https://i.ibb.co/wzjFHmw/3.jpg"
        ],
        2560:[
            "https://i.ibb.co/yWL5XFB/1.jpg",
            "https://i.ibb.co/2MQS3p1/2.jpg",
            "https://i.ibb.co/FwQcMx4/3.jpg"
        ]
    }
]

ProjectModel.create(projects).then(()=>{
    console.log("data inserted");
    mongoose.disconnect();
}).catch(console.log)