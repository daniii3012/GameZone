import { Router } from 'express';

import {indexController} from '../controllers/indexController';

class IndexRoutes{
    public router: Router = Router();


    constructor(){
        this.config();
    }
 
    config(): void{
        this.router.get('/:id/0', indexController.getIDUser);
        this.router.get('/:id/1', indexController.getIDGame);
        this.router.get('/:id/2', indexController.getGame);
        this.router.post('/', indexController.addNewGame);
        this.router.delete('/:idg/:nick', indexController.deleteGame);
        this.router.post('/', indexController.setMaxScore);
        this.router.get('/', indexController.getAllGames);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;