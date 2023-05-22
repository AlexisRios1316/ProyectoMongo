const {Schema,model, Model} = require('mongoose')  //Para importar los modelos 

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

const userModel = Model('user_producto', userSchema);

module.exports = userModel;

