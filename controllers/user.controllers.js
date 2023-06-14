const userModel = require('../models/user.models');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/jwt');
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

const hash = bcrypt.hashSync(password, 10);

    const user = new userModel({
        users:users,
        password:hash,
       

    })
    await user.save()
    res
    .status(201)  //201 = create 
    .json({
        message:' Usuario Creado'
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






// Login / Post 
const login = async (req, res) => {

    const { users, password } = req.body;

    const user = await userModel.findOne({ users:users });

    if (!user) {
        return res
                .status(404)
                .json({
                    message: 'Usuario no encontrado'
                })
                
    }
    else
    {
        console.log(password, user.password);

    const isMatch = bcrypt.compareSync(password, user.password);

    if (isMatch) {
        const token = generateJWT(user._id);

        return res
                .status(200)
                .json({
                    message: 'Usuario logeado correctamente',
                    user: {
                        age: user.age,
                        users: user.users
                    },
                    token: token
                })
                .send()
    } else {
        return res
                .status(401)
                .json({
                   message: 'Usuario incorrecto'
                })
                .send()
    }
    
    }

   

}




module.exports ={
    getUsers,
    createUser,
    userDelete,
    userUpdate,
    login
}








