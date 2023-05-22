const userModel = require('../models/user.models');
//Creando nuestro crud

//GET (OBTENER)
const getUsers = async (req,res) =>{
    const user = await userModel.find();   //find = obtener todo 
    

    res
    .status(200)
    .json({
        users:users
    })
    .send();

}

//POST  (CREAR)
const createUser = async (req,res) =>{
const { modelo,name,serial,cost} = req.body

    const user = new userModel({
        modelo:modelo,
        name:name,
        serial:serial,
        cost:cost

    })
    await user.save()
    res
    .status(201)  //201 = create 
    .json({
        message:'Producto Registrado correctamente'
    })
    .send()
    
}
//DELETE (ELIMINAR)
const userDelete = async (req,res) => {
    const {id} = req.params;

    await userModel.findByIdAndDelete(id);



    res
    .status(200)
    .json({
        message: 'Eliminado correctamente'
    })
    .send()
}



//PUT (ACTUALIZAR)








