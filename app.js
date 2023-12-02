const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const platosRoutes = require('./routes/platos');

const app = express();
const port = 3000;

// Configuración de middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/proyecto-final', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.log('Error al conectar a MongoDB:', error);
  });

// Definir rutas para CRUD de platos
app.use('/api/platos', platosRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor backend en funcionamiento en el puerto', port);
});
