const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const index = require('./routes/index');
const campeonato = require('./routes/campeonatos.routes');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: 'application/vnd.api+json' }));

app.use(cors({ origin: 'http://localhost:3000' }));
app.disable('x-powered-by');
app.set('trust proxy', '127.0.0.1');

app.use(index);
app.use('/api',campeonato);

module.exports = app;


