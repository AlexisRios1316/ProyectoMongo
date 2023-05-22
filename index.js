const express = require('express'); // imports en node js sin ninguna configuracion 
 const app  = express();
 const mongoose = require('mongoose');  //Para realizar la conexion al mongoose 
 require('dotenv').config() // Importamos dotenv
 const port = process.env.PORT || 3000;

 //Configuracion para recibir inofmracion 
 app.use(express.json()) //´Permite que la peticion post reciba informacion

//Conexion a Mongoose 
mongoose.connect(process.env.HOSTDB).then(() => {
console.log('Conexion a mongo DB')
}).catch((error) => {
    console.log(error)
})


// Servidor 
app.listen(port, () => {  //Levantar el servidor 
    console.log('Servidor funcionando en el puerto:' + port)

})
