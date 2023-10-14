// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect("mongodb://localhost:27017/taskDB", { useNewUrlParser: true });

// Schéma et modèle MongoDB
const taskSchema = new mongoose.Schema({
    text: String,
});

const Task = mongoose.model("Task", taskSchema);

// Route pour ajouter une nouvelle tâche
app.post("/api/tasks", (req, res) => {
    const taskText = req.body.text;
    const task = new Task({
        text: taskText,
    });
    task.save((err, savedTask) => {
        if (err) {
            res.status(500).json({ error: "Erreur lors de l'enregistrement de la tâche." });
        } else {
            res.json(savedTask);
        }
    });
});

app.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur le port 3000");
});
