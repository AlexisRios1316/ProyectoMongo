const {Schema,model} = require('mongoose')  //Para importar los modelos 

//Esquema
const userSchema = new Schema({
    users:{
        type:String,
       
    },
    password:{
        type:String,
       
    }
});

const userModel = model('user_producto', userSchema);

module.exports = userModel;
