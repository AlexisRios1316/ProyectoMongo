const express = require('express'); // imports en node js sin ninguna configuracion 
 const app  = express();
 const port = process.env.PORT || 3000;
 
 //Configuracion para recibir inofmracion 
 app.use(express.json()) //´Permite que la peticion post reciba informacion


// Servidor 
app.listen(port, () => {  //Levantar el servidor 
    console.log('Servidor funcionando en el puerto:' + port)

})
