import { Router } from "express";
import { conexion } from "../../db/atlas.js";

let trainer = Router();

let db = await conexion();

trainer.get("/", async(req, res)=>{

    let trainers =  db.collection("trainer");
    let result = await trainers.find({}).toArray();
    res.send(result);

});

trainer.post("/", async(req, res) => {
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