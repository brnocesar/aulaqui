import express from 'express';
import LecturesController from './controllers/LecturesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const lecturesController = new LecturesController();
const connectionController = new ConnectionsController();


routes.get('/aulas', lecturesController.index);
routes.post('/aulas', lecturesController.store);
routes.get('/conexoes', connectionController.index);
routes.post('/conexoes', connectionController.store);

export default routes;