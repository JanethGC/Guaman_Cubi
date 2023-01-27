import { Router } from "express";
const router = Router()

import * as productCtrl from '../controllers/products.controller'

router.post('/',productCtrl.createProduct)

router.get('/',productCtrl.getProducts)    //Al especificar la ruta con /products podremos obtener su metodo get

router.get('/:productId',productCtrl.getProductById)

router.put('/:productId',productCtrl.updateProductById)

router.delete('/:productId',productCtrl.deleteProductById)

export default router;

