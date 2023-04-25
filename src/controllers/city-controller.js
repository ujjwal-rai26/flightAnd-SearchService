const { CityService }=require('../services/index');

const cityService=new CityService();

//for create
const create =async (req,res)=>{
try {
    const city=await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:'successfully create a city',
        err:{}
    })
} catch (error) {

    return res.status(500).json({
        data:{},
        success:false,
        message:'not able to create a city',
        err:error
    })
}
}


//for destroy
const destroy =async (req,res)=>{
try {
    const response=await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:'successfully deleted a city',
        err:{}
    })
} catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:'not able to delete a city',
        err:error
    })
}

}

// to get the city
const get =async (req,res)=>{
try {
    const response=await cityService.getCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:'successfully fetched a city',
        err:{}
    })
} catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:'not able to get a city',
        err:error
    })
}
}


// to get all the city

const getAll=async (req,res)=>{
try {
    const cities=await cityService.getAllCities(req.query);
    return res.status(200).json({
        data:cities,
        success:true,
        message:'successfully fetched all cities',
        err:{}
    })

} catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:'not able to get the cities',
        err:error
    })
}
}

// to update the city
const update =async (req,res)=>{
try {
    const response=await cityService.updateCity(req.params.id,req.body);
    return res.status(200).json({
        data:response,
        success:true,
        message:'successfully fetched a city',
        err:{}
    })
} catch (error) {
    return res.status(500).json({
        data:{},
        success:false,
        message:'not able to update a city',
        err:error
    })
}
}

module.exports={
   create,
   destroy,
   get,
   update,
   getAll
}