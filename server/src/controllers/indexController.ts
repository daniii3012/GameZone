import { Request, Response } from 'express';

import pool from '../database';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({ text: 'ABC' });
    }

    public async getAllGames(req: Request, res: Response) {
        await pool.query('SELECT * FROM game', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getIDUser(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM user WHERE nick = ?', [id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getIDGame(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM game_user WHERE user_id = ?', [id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async getGame(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('SELECT * FROM game WHERE id = ?', [id], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async addNewGame(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO game_user set ?', [req.body]);
        res.json({ message: 'Game Saved' });
    }

    public async deleteGame(req: Request, res: Response): Promise<void> {
        const { idg, nick } = req.params;
        await pool.query('DELETE FROM game_user WHERE game_id = ? and user_id=?', [idg, nick], function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    //Creo que esto creara otro usuario en vez de setear el puntaje máximo, tal vez deberíamos activar un deleate game o algo
    public async setMaxScore(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO game_user set ?', [req.body]);
        res.json({ message: 'Score Changed' });
    }
}

export const indexController = new IndexController();