import mongoose from "mongoose";
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