const express = require('express');
const Router = express.Router();

const userController = require('../controller/userController');
const vehicleController = require('../controller/vehicleController');

Router.post('/register', userController.register);
Router.post('/updateoneuser', userController.updateoneuser);
Router.post('/updatemanyuser', userController.updatemanyuser);
Router.post('/deleteoneuser', userController.deleteoneuser);
Router.get('/modify', userController.modify);


// Router.post('/vehicleRegister', vehicleController.vehicleRegister);
Router.post('/creating', vehicleController.creating);
Router.get('/', vehicleController.find);
Router.get('/:name', vehicleController.getoneuser);
Router.post('/userid', vehicleController.findbyID);
Router.post('/match', vehicleController.match);
Router.post('/name', vehicleController.gets); // query


module.exports = Router