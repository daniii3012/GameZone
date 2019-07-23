import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import { runInThisContext } from 'vm';
import morgan from 'morgan';
import cors from 'cors';
class Server{

    public app: Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes ();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));//Formulario
    }

    routes(): void{
        this.app.use('/games', indexRoutes);
        this.app.use('/user',gamesRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('server on port ', this.app.get ('port'))
        });
    }
}

const server = new Server();
server.start();