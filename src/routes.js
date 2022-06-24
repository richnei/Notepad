const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ImportantController = require('./controllers/ImportantController');

// Rota Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota Important
routes.get('/importants', ImportantController.read);
routes.post('/importants/:id', ImportantController.update)


module.exports = routes;
