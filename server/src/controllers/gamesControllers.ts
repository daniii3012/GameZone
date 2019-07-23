import {Request, Response} from 'express';

import pool from '../database';

class GamesController{
    
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM user', function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('SELECT * FROM user WHERE nick = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
    }

    public async getRegister(req: Request, res: Response): Promise<any> {
        const { id, pass } = req.params;
        await pool.query('SELECT * FROM user WHERE nick = ? and password= ? ', [id,pass], function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO user set ?', [req.body]);
        res.json({message: 'User Saved'});
    }

    public update (req: Request, res: Response){
        res.json({text: 'updating data'});
    } 
}

export const gamesController=new GamesController();
export default gamesController;