import { Router } from "express";
import { conexion } from "../../db/atlas.js";
import { limitGrt } from "../../limit/config.js";
import { validarToken } from "../../limit/token.js";

let trainer = Router();

let db = await conexion();

trainer.get("/trainer", limitGrt(), validarToken, async(req, res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let trainers =  db.collection("trainer");
    let result = await trainers.find({}).toArray();
    res.send(result);

});

trainer.post("/trainer", limitGrt(), validarToken, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let result;
    let trainers =  db.collection("trainer");
    try {
        result = await trainers.insertOne(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
    }
});

export default trainer;