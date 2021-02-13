'use strict'

const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const {ONE_HOUR} = require('./src/helper/cache-time.helper')
const {NotFoundMiddleware, ErrorMiddleware, CacheMiddleware, ParseIntMiddleware} = require('./src/middlewares');
const mongoose = require('mongoose');
const {PORT, MONGO_URI} = require('./src/config');
const projectController = require('./src/controllers/project.controller');
const homeController = require('./src/controllers/home.controller')
const app = express();
const apiRoutes = express.Router();
const router = express.Router();

apiRoutes
.use(morgan('dev'))
.use(express.json())
.use(cors())
.use(helmet())
.use(compression())
.use(express.static('public'));

apiRoutes.get('/', homeController.get);
apiRoutes.get('/project/:projectId', projectController.get);
apiRoutes.get('/project', [ParseIntMiddleware, CacheMiddleware(ONE_HOUR)], projectController.getAll);

router.use('/v1/api', apiRoutes);
router.use(NotFoundMiddleware);
router.use(ErrorMiddleware);

app.use(router);

mongoose.set("useCreateIndex",true);

mongoose
    .connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(
        app.listen(PORT, ()=>{
        console.log("API running o port "+ PORT);
        
    }))
    .catch((error)=>console.log(`Connection error: ${error}`));
