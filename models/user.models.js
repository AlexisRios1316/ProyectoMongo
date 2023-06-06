const {Schema,model} = require('mongoose')  //Para importar los modelos 

//Esquema
const userSchema = new Schema({
    users:{
        type:String,
        required: true,
        unique: true
       
    },
    password:{
        type: String,
        required: true
        
    }
});

const userModel = model('user_producto', userSchema);

module.exports = userModel;
