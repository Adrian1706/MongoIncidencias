import { Router } from "express";
import { conexion } from "../../db/atlas.js";
import { limitGrt } from "../../limit/config.js";

let incidencia2 = Router();

let db = await conexion();

incidencia2.get("/", limitGrt(), async(req, res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);

    let incidencias =  db.collection("incidencia");
    let result = await incidencias.find({}).toArray();
    res.send(result);

});

incidencia2.get("/:Id_incidencia", limitGrt(), async (req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    try {
        const incidencia = db.collection("incidencia");
        if (req.params.Id_incidencia) { 
            const idIncidencia = parseInt(req.params.Id_incidencia);
            const result = await incidencia.findOne({ Id_incidencia: idIncidencia });

            if (result) {
                res.send(result);
            } else {
                res.status(404).send("Incidencia no encontrada");
            }
        } else {
            const allincidencia = await incidencia.find().toArray();
            res.send(allincidencia);
        }
    } catch (error) {
        console.error("Error al obtener las incidencia:", error);
        res.status(500).send("Error interno del servidor");
    }
});

incidencia2.post("/", limitGrt(), async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
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

incidencia2.put("/:Id_incidencia", limitGrt(), async(req, res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);

    const Id_incidencia = parseInt(req.params.Id_incidencia);
    const newData = req.body; 

    try {
        const db = await conexion();
        const incidencias = db.collection("incidencia");
        const result = await incidencias.updateOne({ Id_incidencia }, { $set: newData });

        if (result.matchedCount === 1) {
            res.send("Incidencia actualizada correctamente");
        } else {
            res.status(404).send("Incidencia no encontrada");
        }
    } catch (error) {
        console.error("Error al actualizar la incidencia:", error);
        res.status(500).send("Error interno del servidor");
    }

});

incidencia2.delete("/:Id_incidencia", limitGrt(), async(req, res)=>{
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
     
    const Id_incidencia = parseInt(req.params.Id_incidencia);

    try {
        const db = await conexion();
        const incidencias = db.collection("incidencia");
        const result = await incidencias.deleteOne({ Id_incidencia });

        if (result.deletedCount === 1) {
            res.send("Incidedncia eliminada correctamente");
        } else {
            res.status(404).send("Incidencia no encontrada");
        }
    } catch (error) {
        console.error("Error al eliminar la incidencia:", error);
        res.status(500).send("Error interno del servidor");
    }


});

export default incidencia2;