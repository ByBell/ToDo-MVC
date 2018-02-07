/*
Importer les dépendances
*/
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');

    // Modules
    const frontRoute = require('./routes/front');
    const apiRoute = require('./routes/api');
//

/*
Initialiser le serveur
*/
    const app = express();
    const port = process.env.PORT || 3000;

    app.set( 'view', __dirname + '/www' );
    app.use( express.static( path.join( __dirname, 'www' ) ) );

     // Définir le moteur de rendu
     app.engine( 'html', ejs.renderFile);
     app.set ( 'view engine', 'html');
 
     // Configurer les routes
     app.use( '/', frontRoute);
     app.use('/api', apiRoute);
//

/*
Lancer le serveur
*/
    app.listen( port, () => console.log( `Le serveur est lancé sur le port ${port}` ) );
//