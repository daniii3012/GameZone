import { Router } from 'express';

import gamesController from '../controllers/gamesControllers';

class GamesRoutes{
    public router: Router = Router();


    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', gamesController.list);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.get('/:id', gamesController.getOne);
        this.router.get('/:id/:pass', gamesController.getRegister);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;