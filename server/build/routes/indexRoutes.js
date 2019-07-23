"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id/0', indexController_1.indexController.getIDUser);
        this.router.get('/:id/1', indexController_1.indexController.getIDGame);
        this.router.get('/:id/2', indexController_1.indexController.getGame);
        this.router.post('/', indexController_1.indexController.addNewGame);
        this.router.delete('/:idg/:nick', indexController_1.indexController.deleteGame);
        this.router.post('/', indexController_1.indexController.setMaxScore);
        this.router.get('/', indexController_1.indexController.getAllGames);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
