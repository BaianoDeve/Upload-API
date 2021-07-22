require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { resolve } = require('path');

const port = process.env.PORT || 3001;

const app = express();

require('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Servidor rodando na Porta: ${port}`);
});
