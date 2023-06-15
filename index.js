const express = require('express'); // imports en node js sin ninguna configuracion 
const app  = express();
const {getUsers,createUser,userDelete,userUpdate, login} = require ('./controllers/user.controllers')
 const mongoose = require('mongoose');  //Para realizar la conexion al mongoose 
 require('dotenv').config() // Importamos dotenv
 const port = process.env.PORT || 3000;
const cors = require('cors') // importamos el cors
 //Configuracion para recibir inofmracion 
 app.use(express.json()) //´Permite que la peticion post reciba informacion



 //Uso del cors
app.use(cors());


//Conexion a Mongoose 
mongoose.connect(process.env.HOSTDB).then(() => {
console.log('Conexioon a mongo DB')
}).catch((error) => {
    console.log(error)    
})


app.post('/user/login', login);
app.get('/user',getUsers);
app.post('/user',createUser);
app.put('/user/:id',userUpdate);
app.delete('/user/:id',userDelete);



// Servidor 
app.listen(port, () => {  //Levantar el servidor 
    console.log('Servidor funcionando en el puerto:' + port)

})
