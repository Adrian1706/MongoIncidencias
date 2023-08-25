import { Router } from "express";
import { conexion } from "../../db/atlas.js";

let incidencia = Router();

let db = await conexion();

incidencia.get("/", async(req, res)=>{

    let incidencias =  db.collection("incidencia");
    let result = await incidencias.find({}).toArray();
    res.send(result);

});

incidencia.post("/", async(req, res) => {
    let result;
    let incidencias =  db.collection("incidencia");
    try {
        result = await incidencias.insertOne(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
    }
});

export default incidencia;