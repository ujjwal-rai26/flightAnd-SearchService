const express=require('express');

const{FlightMiddlewares} =require('../../middlewares/index');

const CityController =require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller');
const AirportController=require('../../controllers/airport-controller');

const router=express.Router();  // the work of router is to rout to the other file,eg if someone write api then rout it to some other file

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);


router.post('/flights',FlightMiddlewares.validateCreateFlight ,FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update);

router.post('/airports',AirportController.create);
router.get('/airports/:id',AirportController.get);

module.exports=router;