import mongoose from "mongoose";

const ejemploSchema = new mongoose.Schema({
  id_establecimiento: Number,
  nro_habilitacion: Number,
  cuit: Number,
  estado: String,
  razon_social: String,
  rubro: String,
  actividad: String,
  altura_normalizada: Number,
  calle_normalizada: String,
  comuna: Number,
  barrio: String
})

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

export default Ejemplo;