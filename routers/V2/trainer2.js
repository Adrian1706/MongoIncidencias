import { Router } from "express";
import { conexion } from "../../db/atlas.js";

let trainer2 = Router();

let db = await conexion();

trainer2.get("/", async(req, res)=>{

    let trainers =  db.collection("trainer");
    let result = await trainers.find({}).toArray();
    res.send(result);

});

trainer2.post("/", async(req, res) => {
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


trainer2.put("/:Id_trainer", async(req, res)=>{
    const Id_trainer = parseInt(req.params.Id_trainer);
    const newData = req.body; 

    try {
        const db = await conexion();
        const trainers = db.collection("trainer");
        const result = await trainers.updateOne({ Id_trainer }, { $set: newData });

        if (result.matchedCount === 1) {
            res.send("Trainer actualizado correctamente");
        } else {
            res.status(404).send("Trainer no encontrado");
        }
    } catch (error) {
        console.error("Error al actualizar el trainer:", error);
        res.status(500).send("Error interno del servidor");
    }
});

trainer2.delete("/:Id_trainer", async(req, res)=>{
     
    const Id_trainer = parseInt(req.params.Id_trainer);

    try {
        const db = await conexion();
        const trainers = db.collection("trainer");
        const result = await trainers.deleteOne({ Id_trainer });

        if (result.deletedCount === 1) {
            res.send("Trainer eliminado correctamente");
        } else {
            res.status(404).send("Trainer no encontrado");
        }
    } catch (error) {
        console.error("Error al eliminar el trainer:", error);
        res.status(500).send("Error interno del servidor");
    }


});

export default trainer2;