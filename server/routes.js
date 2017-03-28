import express from 'express';

const router = express();

//controller imports
import basicController from './controllers/basicController';
import gamedev from './controllers/reddit/GameDev';
import devblogs from './controllers/reddit/DevBlogs';
import gamedesign from './controllers/reddit/GameDesign';
import indiegaming from './controllers/reddit/IndieGaming';
import indiedev from './controllers/reddit/IndieDev';
import gamdevs from './controllers/gamasutra/GamDevs';
import emanuelfp from './controllers/EmanuelFeronato/EmanuelFp';
import gdtag from './controllers/Medium/GameDevelopmentTag';
import popular from './controllers/reddit/Popular';
import test from './controllers/Tests/TestDos';
import probando from './controllers/Probando/probando';


router.get('/', basicController.get);
router.get('/reddit/gamedev', gamedev.get);
router.get('/reddit/devblogs', devblogs.get);
router.get('/reddit/gamedesign', gamedesign.get);
router.get('/reddit/indiegaming', indiegaming.get);
router.get('/reddit/indiedev', indiedev.get);
router.get('/gamasutra/gamdevs', gamdevs.get);
router.get('/emanuelferonato/fp', emanuelfp.get);
router.get('/medium/gamedevelopment', gdtag.get);
router.get('/reddit/popular', popular.get);
router.get('/test/dos', test.get);
router.get('/probando/probando', probando.get);


export default router;
