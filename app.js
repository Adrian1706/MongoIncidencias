import dotenv from 'dotenv';
import express from 'express';
import versionRoutes from 'express-routes-versioning'; 
import trainer from './routers/trainer.js';

dotenv.config();

let app = express();

const Route = versionRoutes();

app.use(express.json());
app.use((req, res, next)=>{
    req.version = req.headers['accept-version'];
    next();
});
app.use("/trainer", Route({
    "1.0.0": trainer,
}));

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});