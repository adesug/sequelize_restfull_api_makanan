const makanRoutes = require('express').Router();
const foodsControllers = require('../controllers/foodcontroller');

makanRoutes.get('/', foodsControllers.getAllMakanan);
makanRoutes.post('/', foodsControllers.createNewMakanan);
makanRoutes.get('/:id', foodsControllers.getMakanId);
makanRoutes.delete('/:id', foodsControllers.deleteDataMakan);
makanRoutes.put('/:id', foodsControllers.updateMakanan);
module.exports = makanRoutes;