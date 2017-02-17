import express from 'express';

const router = express();

//controller imports
import basicController from './controllers/basicController';

router.get('/', basicController.get);


export default router
