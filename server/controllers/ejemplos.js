import Ejemplo from "../models/ejemploSchema.js";

export const createPost = async (req,res) => {
    const post = req.body

    const newEjemplo = new Ejemplo(post)
    
    try {
        await newEjemplo.save();
        res.status(201).json(newEjemplo)
    } catch(e) {
        res.status(401).json({message: e.message})
    }
}

export const getEjemplos = async (req, res) => {
    try {
        const ejemplos = await Ejemplo.find();
        res.status(200).json(ejemplos)
    } catch(e) {
        res.status(404).json({message: e.message})
    }
}

export const getRecords = async (req, res) => {
    const { cuit, comuna, rubro, barrio } = req.body;

    const query = {};

    if (cuit) {
        query.cuit = cuit;
    }

    if (comuna) {
        query.comuna = comuna;
    }

    if (rubro) {
        query.rubro = rubro;
    }

    if (barrio) {
        query.barrio = barrio;
    }

    try {
        const data = await Ejemplo.find(query);

        if(data.length === 0) {
            return res.status(404).json({message: "No hay registros"})
        }
        
        return res.status(200).json(data)
    }
    catch(e) {
        return res.status(404).json({message: e.message})
    }   
}