import dotenv from 'dotenv';
import express from 'express';
import versionRoutes from 'express-routes-versioning'; 
import trainer from './routers/V1/trainer.js';
import trainer2 from './routers/V2/trainer2.js';
import incidencia from './routers/V1/incidencia.js';

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
    "2.0.0": trainer2,
}));

app.use("/incidencia", Route({
    "1.0.0": incidencia,
}));

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});