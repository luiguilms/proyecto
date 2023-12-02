const mongoose = require('mongoose');

const platoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  tipo: { type: String, required: true },
  // Otros campos que desees para tu modelo de plato
});

module.exports = mongoose.model('Plato', platoSchema);
