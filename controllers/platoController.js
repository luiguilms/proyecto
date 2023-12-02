const Plato = require('../models/plato');

exports.getPlatos = async (req, res) => {
  try {
    const platos = await Plato.find();
    res.json(platos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlatoById = async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id);
    if (!plato) {
      return res.status(404).json({ message: 'Plato no encontrado' });
    }
    res.json(plato);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPlato = async (req, res) => {
  try {
    const newPlato = new Plato({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      tipo: req.body.tipo,
    });
    const plato = await newPlato.save();
    res.status(201).json(plato);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePlato = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!plato) {
      return res.status(404).json({ message: 'Plato no encontrado' });
    }
    res.json(plato);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlato = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndDelete(req.params.id);
    if (!plato) {
      return res.status(404).json({ message: 'Plato no encontrado' });
    }
    res.json({ message: 'Plato eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
