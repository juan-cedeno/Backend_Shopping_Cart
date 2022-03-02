import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Products } from "../entity/Products";
import { Product } from '../interfaces/product.interface';


export const createProduct = async (req: Request<any, any , Product> , res: Response) => {

    try {
        const newProduct =  getRepository(Products).create(req.body)
        const {id,image,name,price} = await getRepository(Products).save(newProduct)
        
        return res.status(201).json ({
            ok: true,
            id,
            image,
            name,
            price
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Error internal servidor'
        })
    }
}

export const getProduct = async (req: Request , res: Response) => {

    try {
        const product = await getRepository(Products).find()
        return res.status(200).json({
            product
        })
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            message: 'Error internal servidor'
        })
    }
}

export const getProductById = async (req: Request<any , any , Product> , res : Response) => {

    try {
        const id = req.params.id
        const product = await getRepository(Products).findOne(id)
        return res.status(200).json({
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Error internal servidor'
        })
    }
}