import { Router } from "express";
import { conexion } from "../db/atlas.js";

let trainer = Router();

let db = await conexion();



trainer.get("/", async(req, res)=>{

    let trainers =  db.collection("trainer");
    let result = await trainers.find({}).toArray();
    res.send(result);

});

export default trainer;