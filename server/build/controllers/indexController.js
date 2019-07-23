"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class IndexController {
    index(req, res) {
        res.json({ text: 'ABC' });
    }
    getAllGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM game', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getIDUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM user WHERE nick = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getIDGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM game_user WHERE user_id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM game WHERE id = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    addNewGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO game_user set ?', [req.body]);
            res.json({ message: 'Game Saved' });
        });
    }
    deleteGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idg, nick } = req.params;
            yield database_1.default.query('DELETE FROM game_user WHERE game_id = ? and user_id=?', [idg, nick], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //Creo que esto creara otro usuario en vez de setear el puntaje máximo, tal vez deberíamos activar un deleate game o algo
    setMaxScore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO game_user set ?', [req.body]);
            res.json({ message: 'Score Changed' });
        });
    }
}
exports.indexController = new IndexController();
