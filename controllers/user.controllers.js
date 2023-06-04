const userModel = require('../models/user.models');
//Creando nuestro crud

//GET (OBTENER)
const getUsers = async (req,res) =>{
    const user = await userModel.find();   //find = obtener todo 
    

    res
    .status(200)
    .json({
        users:user
    })
    .send();

}

//POST  (CREAR)
const createUser = async (req,res) =>{
const { users,password} = req.body

    const user = new userModel({
        users:users,
        password:password,
       

    })
    await user.save()
    res
    .status(201)  //201 = create 
    .json({
        message:'Acceso correctamente '
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


const userUpdate = async (req,res) => {
    const {id} = req.params;
    const { users,password} = req.body

    await userModel.findByIdAndUpdate(id,{
        users:users,
        password:password

        
    });



    res
    .status(200)
    .json({
        message: ' Actualizado correctamente'
    })
    .send()
}

module.exports ={
    getUsers,
    createUser,
    userDelete,
    userUpdate
}








