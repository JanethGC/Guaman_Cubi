import { Router } from "express";
const router = Router()

import * as productCtrl from '../controllers/products.controller'

import { verifyToken } from '../middlewares'

router.post('/', verifyToken ,productCtrl.createProduct)

router.get('/',productCtrl.getProducts)    //Al especificar la ruta con /products podremos obtener su metodo get

router.get('/:productId',productCtrl.getProductById)

router.put('/:productId',verifyToken,productCtrl.updateProductById)

router.delete('/:productId',verifyToken,productCtrl.deleteProductById)

export default router;

