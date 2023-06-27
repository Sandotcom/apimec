const mongoose = require('mongoose');

const establecimientoSchema = new mongoose.Schema({
    id_establecimiento: Number,
    nro_habilitacion: Number,
    cuit: Number,
    estado: String,
    razon_social: String,
    rubro: String,
    actividad: String,
    // cod_clanae: String,
    // smp: String,
    calle_normalizada: String,
    altura_normalizada: Number,
    // piso: String,
    // depto: String,
    // matriz: Number,
    // sup_terr: Number,
    // cant_ph: Number,
    // coordenada_x: Number,
    // coordenada_y: Number,
    comuna: Number,
    barrio: String,
    // n_usos_del_suelo: Number,
    // n_usos_local_comercial: Number,
    // smp_alter: String,
    // tipo_persona: String,
    // tipo_documento: String,
    // nro_documento: Number,
    // id_persona: String,
    // nombre: String,
    // apellido1: String,
    // apellido2: String,
    // genero: String,
    // nacionalidad: String,
    // broker_id: String,
    // broker_id_valido: String,
    // cuit_valido: String
});

const Establecimiento = mongoose.model('Establecimiento', establecimientoSchema);

export default Establecimiento;