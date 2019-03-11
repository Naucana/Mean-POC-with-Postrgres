const express = require('express');
//const cors = require('cors');
const app = express();
const urlbase = '/api/v1';

const db = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use(urlbase, require('./routes/user.routes'));
app.use(urlbase, require('./routes/tipologia.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

