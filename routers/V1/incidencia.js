import { Router } from "express";
import { conexion } from "../../db/atlas.js";

let incidencia = Router();

let db = await conexion();

incidencia.get("/", async(req, res)=>{

    let incidedncias =  db.collection("incidencia");
    let result = await incidedncias.find({}).toArray();
    res.send(result);

});

export default incidencia;