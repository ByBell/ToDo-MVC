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
    let mongodbUrl = 'mongodb://127.0.0.1:27017/todo';
//

/*
Définition des routes
*/
   // Afficher les tâches
   router.get( '/gettask', (req, res, next) => {

        // Connexion à MongoDB
        MongoClient.connect(mongodbUrl, (err, db) => {

            // On vérifie l'état de la connexion
            if(err) { res.send(err) }
            else {

                // On valide la récupération des tâches
                db.collection('tasks').find().toArray((err, tasks) => {

                    // On vérifie à nouveau l'absence d'erreurs
                    if(err) { res.send(err) }
                    else{ 
                        // Envoyer les données au format JSON
                        res.render('index', {'tasks' : tasks})
                    }
                })
            }

            // Fermer la connexion
            db.close();
        })
    })
//

/*
Exporter le module de route
*/
    module.exports = router;
//