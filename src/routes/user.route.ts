import {Router} from 'express';
import { check } from 'express-validator';
import { createProduct, getProduct, getProductById } from '../controllers/user.controller';
import { validatorCamp } from '../middlewares/validator_camp';

const userRouter = Router()

userRouter.post('/create_product', 

[
    check('name', 'Name is obligatory').not().isEmpty(),
    check('price', 'Price is obligatory').not().isEmpty(),
    check('price', 'Price is a number').isAlphanumeric(),
    validatorCamp
]
,createProduct
)

userRouter.get('/' , getProduct)
userRouter.get('/:id' , getProductById)


export default userRouter