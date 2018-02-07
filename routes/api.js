/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const mongodb = require('mongodb');
//

/*
Connexion à la BDD 
Configuration de MongoDB
*/
    let ObjectId = mongodb.ObjectID;
    let MongoClient = mongodb.MongoClient;
    let mongodbUrl = 'mongodb://127.0.0.1:27017';
//


/*
Définition des routes
*/
    // Ajout d'une tâche
    router.post( '/addtask', (req, res, next) => {

        // Connexion à MongoDB
        MongoClient.connect(mongodbUrl, (err, client) => {

            var db = client.db('todo');

            // On vérifie l'état de la connexion
            if(err) { res.send(err) }
            else{

                // Ajouter la tâche à MongoDB
                db.collection('tasks').insert(req.body, (err, data) => {
                    
                    // On vérifie à nouveau l'absence d'erreurs
                    if(err) { res.send(err) }
                    else{ res.send(data) }
                })
            }
            
            // Fermer la connexion
            client.close();
        })
    });

//

/*
Exporter le module de route
*/
    module.exports = router;
//