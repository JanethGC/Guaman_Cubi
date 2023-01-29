import {Schema, model} from "mongoose"

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String,
}, {
    timestamps: true,  //Activa la funcion de fecha de cracion y actualizacion
    versionKey: false       //Para que no aparezca un __schema
})

export default model('Product', productSchema);

