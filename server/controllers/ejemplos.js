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