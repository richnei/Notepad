const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ImportantController = require('./controllers/ImportantController');
const ContentController = require('./controllers/ContentController');

// Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota Important
routes.get('/importants', ImportantController.read);
routes.post('/importants/:id', ImportantController.update);

// Rota Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;
