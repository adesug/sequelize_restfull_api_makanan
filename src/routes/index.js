const mainRoutes = require('express').Router();
const authRoutes = require('./authRoutes');
const makanRoutes= require('./makanroutes');


mainRoutes.use('/auth',authRoutes);

mainRoutes.use('/api/makan',makanRoutes);

module.exports=mainRoutes;