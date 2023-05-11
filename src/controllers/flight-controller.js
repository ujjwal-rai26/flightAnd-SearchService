const {SuccessCodes} =require('../utils/error-codes');

const { FlightService }=require('../services/index');

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);

        return res.status(SuccessCodes.CREATED).json({
        data:flight,
        success:true,
        err:{},
        message:'successfully created a flight'
        })

        
    } 
    catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to create a flight',
            err:error
        });
    }
}

const getAll =async (req,res)=>{
    try {
        
        const response=await flightService.getAllFlightData(req.query);

        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'successfully fetch the flights'
            })
    
    } 
    catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch the flights',
            err:error
        });
    }
}

const get =async (req,res)=>{
    try {
        
        const response=await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'successfully fetch the flight'
            })
    
    } 
    catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to fetch the flight',
            err:error
        });
    }
}
const update =async (req,res)=>{
    try {
        
        const response=await flightService.updateFlights(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            err:{},
            message:'successfully updated the flight'
            })
    
    } 
    catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update the flight',
            err:error
        });
    }
}

module.exports={
    create,
    getAll,
    get,
    update
}