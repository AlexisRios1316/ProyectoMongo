const {Schema,model, model} = require('mongoose')  //Para importar los modelos 

//Esquema
const userSchema = new Schema({
    modelo:{
        type:String,
       
    },
    name:{
        type:String,
       
    },
    serial:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
     
    }
});

const userModel = model('user_producto', userSchema);

module.exports = userModel;